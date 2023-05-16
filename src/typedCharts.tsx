import * as ChartJS from 'chart.js'
import DefaultChart from './chart'
import type { ChartProps } from './types'
import type { ChartType, ChartComponentLike } from 'chart.js'

export type TypedChartProps = Omit<ChartProps, 'type'>

function createTypedChart<T extends ChartType>(type: T, registerables: ChartComponentLike) {
    ChartJS.Chart.register(registerables)
    return (props: TypedChartProps) => <DefaultChart type={type} {...props} />
}

export const Line = /* #__PURE__ */ createTypedChart('line', ChartJS.LineController)
export const Bar = /* #__PURE__ */ createTypedChart('bar', ChartJS.BarController)
export const Radar = /* #__PURE__ */ createTypedChart('radar', ChartJS.RadarController)
export const Doughnut = /* #__PURE__ */ createTypedChart('doughnut', ChartJS.DoughnutController)
export const PolarArea = /* #__PURE__ */ createTypedChart('polarArea', ChartJS.PolarAreaController)
export const Bubble = /* #__PURE__ */ createTypedChart('bubble', ChartJS.BubbleController)
export const Pie = /* #__PURE__ */ createTypedChart('pie', ChartJS.PieController)
export const Scatter = /* #__PURE__ */ createTypedChart('scatter', ChartJS.ScatterController)
