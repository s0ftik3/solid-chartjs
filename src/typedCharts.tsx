import { ChartJs } from './index'
import { ChartJsProps } from './types'

export type TypedChartProps = Omit<ChartJsProps, 'type'>

export function Line(props: TypedChartProps) {
    return <ChartJs type="line" {...props} />
}

export function Bar(props: TypedChartProps) {
    return <ChartJs type="bar" {...props} />
}

export function Doughnut(props: TypedChartProps) {
    return <ChartJs type="doughnut" {...props} />
}

export function Radar(props: TypedChartProps) {
    return <ChartJs type="radar" {...props} />
}

export function PolarArea(props: TypedChartProps) {
    return <ChartJs type="polarArea" {...props} />
}

export function Bubble(props: TypedChartProps) {
    return <ChartJs type="bubble" {...props} />
}

export function Pie(props: TypedChartProps) {
    return <ChartJs type="pie" {...props} />
}

export function Scatter(props: TypedChartProps) {
    return <ChartJs type="scatter" {...props} />
}
