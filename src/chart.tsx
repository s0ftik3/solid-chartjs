import Chart, {
    ChartData,
    ChartItem,
    ChartOptions,
    Plugin,
} from 'chart.js/auto'
import { createEffect, mergeProps, on, onCleanup, onMount } from 'solid-js'
import { unwrap } from 'solid-js/store'
import { ChartJsProps } from './types'

export default function ChartJs(props: ChartJsProps) {
    let chart: Chart
    let canvasRef: HTMLCanvasElement | undefined

    const merged = mergeProps(
        {
            width: 512,
            height: 512,
            type: 'line',
            data: {} as ChartData,
            options: { responsive: true } as ChartOptions,
            plugins: [] as Plugin[],
        },
        props
    )

    const init = () => {
        const ctx = canvasRef?.getContext('2d') as ChartItem
        const config = unwrap(merged)
        chart = new Chart(ctx, {
            type: config.type,
            data: config.data,
            options: config.options,
            plugins: config.plugins,
        })
    }

    onMount(() => {
        init()
    })

    createEffect(
        on(
            () => merged.data,
            () => {
                chart.data = merged.data
                chart.update()
            },
            {
                defer: true,
            }
        )
    )

    createEffect(
        on(
            [() => merged.width, () => merged.height],
            () => {
                chart.resize(merged.width, merged.height)
            },
            {
                defer: true,
            }
        )
    )

    createEffect(
        on(
            () => merged.type,
            () => {
                // save the chart's dimensions
                const dimensions = [chart.width, chart.height]

                chart.destroy()
                init()

                // restore the chart's dimensions before destroying
                chart.resize(...dimensions)
            },
            {
                defer: true,
            }
        )
    )

    onCleanup(() => {
        chart?.destroy()
    })

    return (
        <canvas ref={canvasRef} height={merged.height} width={merged.width}>
            {merged.fallback}
        </canvas>
    )
}
