<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-chartjs&background=tiles&project=LIBRARY" alt="solid-chartjs">
</p>

# solid-chartjs

<img align="right" width="150" height="150" alt="Logo" src="assets/solid-chartjs-logo.png">

[![version](https://badgen.net/npm/v/solid-chartjs)](https://npmjs.com/package/solid-chartjs)
[![downloads](https://badgen.net/npm/dm/solid-chartjs)](https://www.npmjs.com/package/solid-chartjs)
[![telegram chat](https://img.shields.io/badge/Ask%20a%20Question-Telegram-blue)](https://t.me/solid_chartjs)

The `solid-chartjs` library is a SolidJS wrapper around the [`Chart.js`](https://www.chartjs.org) library, allowing you to easily create interactive charts in your SolidJS applications.

-   [Quick start](#quick-start)
-   [Chart Props](#chart-props)
-   [Examples](#examples)
-   [Credits](#credits)
-   [Contributing](#contributing)
    -   [Contribution Guidelines](#contribution-guidelines)
-   [Code and Commit Standards](#code-and-commit-standards)
-   [License](#license)

## Quick start

Installation:

```bash
pnpm add solid-chartjs chart.js @solid-primitives/refs
# or
yarn add solid-chartjs chart.js @solid-primitives/refs
# or
npm i solid-chartjs chart.js @solid-primitives/refs
```

Usage:

```tsx
import { onMount } from 'solid-js'
import { Chart, Title, Tooltip, Legend, Colors } from 'chart.js'
import { Line } from 'solid-chartjs'

const MyChart = () => {
    /**
     * You must register optional elements before using the chart,
     * otherwise you will have the most primitive UI
     */
    onMount(() => {
        Chart.register(Title, Tooltip, Legend, Colors)
    })

    const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Sales',
                data: [50, 60, 70, 80, 90],
            },
        ],
    }
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    }

    return (
        <div>
            <Line data={chartData} options={chartOptions} width={500} height={500} />
        </div>
    )
}
```

If you don't want to import and register the controllers, elements, scales, and plugins you want to use, you can use the following solution:

> **Note**: it is considered to better use the tree-shakable way to decrease the bundle size.

```tsx
import 'chart.js/auto'
import { DefaultChart } from 'solid-chartjs'

<DefaultChart type="line" data={data} options={options} />
```

## Chart Props

| Prop     | Description                                     | Type                                                                                                  |
| -------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| width    | The width of the chart canvas in pixels.        | number \| undefined                                                                                   |
| height   | The height of the chart canvas in pixels.       | number \| undefined                                                                                   |
| fallback | A fallback element to display when chart fails. | JSX.Element                                                                                           |
| type     | The type of the chart.                          | keyof [ChartTypeRegistry](https://www.chartjs.org/docs/latest/api/interfaces/ChartTypeRegistry.html)  |
| data     | The chart data object.                          | [ChartData](https://www.chartjs.org/docs/latest/api/interfaces/ChartData.html) \| undefined           |
| options  | The chart options object.                       | [ChartOptions](https://www.chartjs.org/docs/latest/api/interfaces/CoreChartOptions.html) \| undefined |
| plugins  | The chart plugins object.                       | [Plugin](https://www.chartjs.org/docs/latest/api/interfaces/Plugin.html)[] \| undefined               |

## Examples

Check out `/dev` folder and run the SolidJs application to see how it works.

You can also use the `DefaultChart` components:

> **Note**: `DefaultChart` is a wrapper around `Chart` component, so you can use all the props from `Chart` component.
> `DefaultChart` component does _not_ have its registrable elements registered by default, so you need to register them yourself unless you use `chart.js/auto`.

```tsx
import { onMount } from 'solid-js'
import {
    Chart,
    LineController,
    CategoryScale,
    PointElement,
    LineElement,
    LinearScale,
} from 'chart.js'
import { DefaultChart } from 'solid-chartjs'

const MyChart = () => {
    onMount(() => {
        Chart.register(LineController, CategoryScale, PointElement, LineElement, LinearScale)
    })

    // ... your data and options objects

    return <DefaultChart type="line" data={data} options={options} width={400} height={300} />
}
```

Usage of `fallback` prop:

```tsx
const fallback = () => {
    return (
        <div>
            <p>Chart is not available</p>
        </div>
    )
}

<DefaultChart type="bar" data={chartData} options={chartOptions} fallback={fallback} />
```

## Credits

-   This library is _heavily_ inspired by [react-chartjs-2](https://react-chartjs-2.js.org/)
-   Awesome charting library [Chart.js](https://www.chartjs.org)
-   Flexible library for building user interfaces [SolidJs](https://www.solidjs.com/)

## Contributing

### Contribution Guidelines

Please read our [Contribution Guidelines](/docs/CONTRIBUTION.md) before you contribute.

## Code and Commit Standards

Please read and follow the [standards for this repo](/docs/STANDARDS.md)

These standards are laid out to ensure that the code base is as maintainable as possible.

## License

[MIT](/LICENSE)
