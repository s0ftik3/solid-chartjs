import Chart, {
    ChartData,
    ChartItem,
    ChartOptions,
    ChartTypeRegistry,
} from 'chart.js/auto'
import { createEffect, createSignal, mergeProps, on, onCleanup } from 'solid-js'
import { Canvas } from './components/UI/Canvas'
import { generateRandomString } from './utils/random'
import { unwrap } from 'solid-js/store'

export interface SolidChartJsProps {
    id?: string
    height?: string | number
    width?: string | number
    type: keyof ChartTypeRegistry
    data: ChartData
    options?: ChartOptions
    [key: string]: any
}

export default function SolidChartJs(props: SolidChartJsProps) {
    let chart: Chart

    const merged = mergeProps(
        {
            id: `chart-${generateRandomString()}`,
            height: 'auto',
            width: '100%',
            type: 'line',
        },
        props
    )

    const { id, height, width, ...chartConfig } = unwrap(merged)
    const [chartRef, setChartRef] = createSignal<HTMLCanvasElement>()

    createEffect(() => {
        const canvasElement = chartRef()
        if (!canvasElement) return

        const ctx = canvasElement.getContext('2d') as ChartItem
        chart = new Chart(ctx, chartConfig)
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

    onCleanup(() => {
        if (chart) {
            chart.destroy()
        }
    })

    return (
        <>
            <Canvas
                id={id}
                onMount={(canvas: HTMLCanvasElement) =>
                    setChartRef(() => canvas)
                }
                height={height}
                width={width}
            />
        </>
    )
}
