import { ChartData, ChartOptions, ChartTypeRegistry } from 'chart.js/auto'
import { JSX } from 'solid-js/types/jsx'

export interface ChartJsProps {
    width?: number | undefined
    height?: number | undefined
    fallback?: JSX.Element
    type: keyof ChartTypeRegistry
    data?: ChartData
    options?: ChartOptions
    [key: string]: any
}
