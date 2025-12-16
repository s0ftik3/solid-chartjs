/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { mergeRefs } from '@solid-primitives/refs'
import { Chart, ChartData, ChartItem, ChartOptions, Plugin } from 'chart.js'
import { createEffect, mergeProps, on, onCleanup, onMount, createSignal } from 'solid-js'
import { unwrap } from 'solid-js/store'
import { ChartProps } from './types'

export default function DefaultChart(props: ChartProps) {
    const [canvasRef, setCanvasRef] = createSignal<HTMLCanvasElement | null>()
    const [chart, setChart] = createSignal<Chart>()

    const merged = mergeProps(
        {
            width: 512,
            height: 512,
            type: 'line',
            data: {} as ChartData,
            options: { responsive: true } as ChartOptions,
            plugins: [] as Plugin[],
        },
        props,
    )

    const init = () => {
        const ctx = canvasRef()?.getContext('2d') as ChartItem
        const config = unwrap(merged)

        if (config.type !== 'radar') {
            //* remove the RadialLinearScale from the chart's scales
            if (config.options.scales?.r) {
                console.debug('[Solid-ChartJS]: Removing un-needed RadialLinearScale')
                delete config.options.scales?.r
            }
        }

        const chart = new Chart(ctx, {
            type: config.type,
            data: config.data,
            options: config.options,
            plugins: config.plugins,
        })
        setChart(chart)
    }

    onMount(() => {
        init()
    })

    createEffect(
        on(
            () => merged.data,
            () => {
                chart()!.data = merged.data
                chart()!.update()
            },
            {
                defer: true,
            },
        ),
    )

    createEffect(
        on(
            () => merged.options,
            () => {
                chart()!.options = merged.options
                chart()!.update()
            },
            {
                defer: true,
            },
        ),
    )

    createEffect(
        on(
            [() => merged.width, () => merged.height],
            () => {
                chart()!.resize(merged.width, merged.height)
            },
            {
                defer: true,
            },
        ),
    )

    createEffect(
        on(
            () => merged.type,
            () => {
                // save the chart's dimensions
                const dimensions = [chart()!.width, chart()!.height]

                chart()!.destroy()
                init()

                // restore the chart's dimensions before destroying
                chart()!.resize(...dimensions)
            },
            {
                defer: true,
            },
        ),
    )

    onCleanup(() => {
        chart()?.destroy()
        mergeRefs(props.ref, null)
    })

    return (
        <canvas
            ref={mergeRefs(props.ref, (el) => setCanvasRef(el))}
            height={merged.height}
            width={merged.width}
            {...merged.extraCanvasAttributes}>
            {merged.fallback}
        </canvas>
    )
}
