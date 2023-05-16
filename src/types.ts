import type { Ref } from '@solid-primitives/refs'
import type {
    Chart,
    ChartData,
    ChartOptions,
    Plugin,
    UpdateMode,
    ChartTypeRegistry,
} from 'chart.js'
import type { JSXElement } from 'solid-js'
/**
 * Chart props
 */
export interface ChartProps {
    /**
     * Chart.js chart type
     */
    type: keyof ChartTypeRegistry
    /**
     * The data object that is passed into the Chart.js chart
     * @see https://www.chartjs.org/docs/latest/getting-started/
     */
    data?: ChartData
    /**
     * The options object that is passed into the Chart.js chart
     * @see https://www.chartjs.org/docs/latest/general/options.html
     * @default {}
     */
    options?: ChartOptions
    /**
     * The plugins array that is passed into the Chart.js chart
     * @see https://www.chartjs.org/docs/latest/developers/plugins.html
     * @default []
     */
    plugins?: Plugin[]
    /**
     * Teardown and redraw chart on every update
     * @default false
     */
    redraw?: boolean
    /**
     * Key name to identify dataset
     * @default 'label'
     */
    datasetIdKey?: string
    /**
     * A fallback for when the canvas cannot be rendered. Can be used for accessible chart descriptions
     * @see https://www.chartjs.org/docs/latest/general/accessibility.html
     * @default null
     * @todo Replace with `children` prop.
     */
    fallbackContent?: string | JSXElement
    /**
     * A mode string to indicate transition configuration should be used.
     * @see https://www.chartjs.org/docs/latest/developers/api.html#update-mode
     */
    updateMode?: UpdateMode

    /**
     * The width of the canvas element
     * @default 300
     */
    width?: number | undefined

    /**
     * The height of the canvas element
     * @default 150
     */
    height?: number | undefined

    /**
     * The fallback element to render when the canvas cannot be rendered.
     * @default null
     */
    fallback?: JSXElement | null

    /**
     * Support for any other Chart.js options
     * @default {}
     */
    [key: string]: any

    /**
     * A ref to the Chart.js instance
     * @default null
     */
    ref: Ref<HTMLCanvasElement | null>
}
