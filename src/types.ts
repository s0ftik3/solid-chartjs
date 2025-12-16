import type { Ref } from '@solid-primitives/refs'
import type { ChartData, ChartOptions, Plugin, ChartTypeRegistry } from 'chart.js'
import type { JSXElement, JSX } from 'solid-js'

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
     * The width of the canvas element
     * @default 512
     */
    width?: number | undefined
    /**
     * The height of the canvas element
     * @default 512
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
    ref?: Ref<HTMLCanvasElement | null>
    /**
     * Extra attributes to be forwarded directly to the canvas
     *
     * For example for setting the `id`, `role`, or `aria-label`.
     *
     * This can be used for any attribute except `width` and `height`,
     * which can be set directly.
     * @default {}
     */
    extraCanvasAttributes?: Omit<JSX.CanvasHTMLAttributes<HTMLCanvasElement>, 'width' | 'height'>
}
