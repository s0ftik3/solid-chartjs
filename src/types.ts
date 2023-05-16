import {
    ChartData,
    ChartOptions,
    ChartTypeRegistry,
    Plugin,
} from 'chart.js/auto'
import { JSX } from 'solid-js/types/jsx'

export interface ChartJsProps {
    width?: number | undefined
    height?: number | undefined
    fallback?: JSX.Element
    type: keyof ChartTypeRegistry
    data?: ChartData
    options?: ChartOptions
    plugins?: Plugin[]
    [key: string]: any
}
