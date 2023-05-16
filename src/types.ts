import { Ref } from '@solid-primitives/refs'
import type {
    Chart,
    ChartType,
    ChartData,
    ChartOptions,
    DefaultDataPoint,
    Plugin,
    UpdateMode,
    ChartTypeRegistry,
} from 'chart.js'
import type { JSX, JSXElement } from 'solid-js'

export { Ref }

//export interface ChartProps<
//    TType extends ChartType = ChartType,
//    TData = DefaultDataPoint<TType>,
//    TLabel = unknown,
//> extends JSX.CanvasHTMLAttributes<HTMLCanvasElement> {
//    /**
//     * Chart.js chart type
//     */
//    type: TType
//    /**
//     * The data object that is passed into the Chart.js chart
//     * @see https://www.chartjs.org/docs/latest/getting-started/
//     */
//    data: ChartData<TType, TData, TLabel>
//    /**
//     * The options object that is passed into the Chart.js chart
//     * @see https://www.chartjs.org/docs/latest/general/options.html
//     * @default {}
//     */
//    options?: ChartOptions<TType>
//    /**
//     * The plugins array that is passed into the Chart.js chart
//     * @see https://www.chartjs.org/docs/latest/developers/plugins.html
//     * @default []
//     */
//    plugins?: Plugin<TType>[]
//    /**
//     * Teardown and redraw chart on every update
//     * @default false
//     */
//    redraw?: boolean
//    /**
//     * Key name to identify dataset
//     * @default 'label'
//     */
//    datasetIdKey?: string
//    /**
//     * A fallback for when the canvas cannot be rendered. Can be used for accessible chart descriptions
//     * @see https://www.chartjs.org/docs/latest/general/accessibility.html
//     * @default null
//     * @todo Replace with `children` prop.
//     */
//    fallbackContent?: string | JSXElement
//    /**
//     * A mode string to indicate transition configuration should be used.
//     * @see https://www.chartjs.org/docs/latest/developers/api.html#update-mode
//     */
//    updateMode?: UpdateMode
//
//    /**
//     * The width of the canvas element
//     * @default 300
//     */
//    width?: number | undefined
//
//    /**
//     * The height of the canvas element
//     * @default 150
//     */
//    height?: number | undefined
//
//    /**
//     * The fallback element to render when the canvas cannot be rendered.
//     * @default null
//     */
//    fallback?: JSXElement | null
//
//    /**
//     * Support for any other Chart.js options
//     * @default {}
//     */
//    [key: string]: any
//}

/**
 * @todo Replace `undefined` with `null`
 */
//export type ChartJSOrUndefined<
//    TType extends ChartType = ChartType,
//    TData = DefaultDataPoint<TType>,
//    TLabel = unknown,
//> = Chart<TType, TData, TLabel> | undefined
//
//export type BaseChartComponent = <
//    TType extends ChartType = ChartType,
//    TData = DefaultDataPoint<TType>,
//    TLabel = unknown,
//>(
//    props: ChartProps<TType, TData, TLabel> & {
//        ref?: Ref<ChartJSOrUndefined<TType, TData, TLabel>>
//    },
//) => JSX.Element
//
//export type TypedChartComponent<TDefaultType extends ChartType> = <
//    TData = DefaultDataPoint<TDefaultType>,
//    TLabel = unknown,
//>(
//    props: Omit<ChartProps<TDefaultType, TData, TLabel>, 'type'> & {
//        ref?: Ref<ChartJSOrUndefined<TDefaultType, TData, TLabel>>
//    },
//) => JSX.Element

export interface ChartProps {
    width?: number | undefined
    height?: number | undefined
    fallback?: JSX.Element
    type: keyof ChartTypeRegistry
    data?: ChartData
    options?: ChartOptions
    plugins?: Plugin[]
    [key: string]: any
}
