import Chart, {
    ChartData,
    ChartItem,
    ChartOptions,
    ChartTypeRegistry,
} from 'chart.js/auto'
import { createEffect, createSignal, mergeProps, on, onCleanup } from 'solid-js'
import { Canvas } from './components/UI/Canvas'
import { unwrap } from 'solid-js/store'

export interface SolidChartJsProps {
    width?: number | undefined
    height?: number | undefined
    type: keyof ChartTypeRegistry
    data: ChartData
    options?: ChartOptions
    [key: string]: any
}

export default function SolidChartJs(props: SolidChartJsProps) {
    let chart: Chart

    const merged = mergeProps(
        {
            width: 512,
            height: 512,
            type: 'line',
        },
        props
    )

    const [chartRef, setChartRef] = createSignal<HTMLCanvasElement>()

    createEffect(() => {
        if (chart) return

        const canvasElement = chartRef()
        if (!canvasElement) return

        const ctx = canvasElement.getContext('2d') as ChartItem
        const chartConfig = unwrap(merged)
        chart = new Chart(ctx, {
            type: chartConfig.type,
            data: chartConfig.data,
            options: chartConfig.options,
        })
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

    onCleanup(() => {
        chart?.destroy()
    })

    return (
        <>
            <Canvas
                onMount={(canvas: HTMLCanvasElement) =>
                    setChartRef(() => canvas)
                }
                height={merged.height}
                width={merged.width}
            />
        </>
    )
}
