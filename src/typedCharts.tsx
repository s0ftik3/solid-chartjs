import {
    Chart,
    LineController,
    BarController,
    RadarController,
    DoughnutController,
    PolarAreaController,
    BubbleController,
    PieController,
    ScatterController,
} from 'chart.js'
import DefaultChart from './chart'
import type { ChartProps } from './types'
import type { ChartType, ChartComponentLike } from 'chart.js'

export type TypedChartProps = Omit<ChartProps, 'type'>
export { DefaultChart }

function createTypedChart<T extends ChartType>(type: T, registerables: ChartComponentLike) {
    Chart.register(registerables)
    return (props: TypedChartProps) => <DefaultChart type={type} {...props} />
}

export const Line = /* #__PURE__ */ createTypedChart('line', LineController)
export const Bar = /* #__PURE__ */ createTypedChart('bar', BarController)
export const Radar = /* #__PURE__ */ createTypedChart('radar', RadarController)
export const Doughnut = /* #__PURE__ */ createTypedChart('doughnut', DoughnutController)
export const PolarArea = /* #__PURE__ */ createTypedChart('polarArea', PolarAreaController)
export const Bubble = /* #__PURE__ */ createTypedChart('bubble', BubbleController)
export const Pie = /* #__PURE__ */ createTypedChart('pie', PieController)
export const Scatter = /* #__PURE__ */ createTypedChart('scatter', ScatterController)
