<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-chartjs&background=tiles&project=%20" alt="solid-chartjs">
</p>

# solid-chartjs

[![version](https://badgen.net/npm/v/solid-chartjs)](https://npmjs.com/package/solid-chartjs)
[![downloads](https://badgen.net/npm/dm/solid-chartjs)](https://www.npmjs.com/package/solid-chartjs)
[![telegram chat](https://img.shields.io/badge/Ask%20a%20Question-Telegram-blue)](https://t.me/solid_chartjs)

The `solid-chartjs` library is a SolidJS wrapper around the [`Chart.js`](https://www.chartjs.org) library, allowing you to easily create interactive charts in your SolidJS applications.

> **Note**: This library is _heavily_ inspired by [react-chartjs-2](https://react-chartjs-2.js.org/)

- [solid-chartjs](#solid-chartjs)
  - [Quick start](#quick-start)
  - [Chart Props](#chart-props)
  - [Examples](#examples)

## Quick start

Installation:

```bash
npm i solid-chartjs
# or
yarn add solid-chartjs
# or
pnpm add solid-chartjs
```

Usage:

```tsx
import { onMount } from 'solid-js'
import { Line, 
         Bar, 
         Doughnut, 
         Radar, 
         PolarArea, 
         Bubble, 
         Pie, 
         Scatter, 
         Title,
         Tooltip,
         Legend, } from 'solid-chartjs'

const MyChart = () => {

    //* Register optional elements 
    onMount(() => {
        Chart.register(
            Title,
            Tooltip,
            Legend,
        )
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
        <Line data={data} options={options} width={500} height={500} />
        <Bar data={data} options={options} width={500} height={500} />
        <Doughnut data={data} options={options} width={500} height={500} />
        // ...etc
    )
}
```

## Chart Props

| Prop     | Description                                     | Type    |
|----------|-------------------------------------------------|---------|
| width    | The width of the chart canvas in pixels.        | number \| undefined   |
| height   | The height of the chart canvas in pixels.       | number \| undefined   |
| fallback | A fallback element to display when chart fails. | JSX.Element |
| type     | The type of the chart.                          | keyof [ChartTypeRegistry](https://www.chartjs.org/docs/latest/api/interfaces/ChartTypeRegistry.html) |
| data     | The chart data object.                          | [ChartData](https://www.chartjs.org/docs/latest/api/interfaces/ChartData.html) \| undefined |
| options  | The chart options object.                       | [ChartOptions](https://www.chartjs.org/docs/latest/api/interfaces/CoreChartOptions.html) \| undefined |
| plugins  | The chart plugins object.                       | [Plugin](https://www.chartjs.org/docs/latest/api/interfaces/Plugin.html)[] \| undefined |

## Examples

Check out `/dev` folder and run the SolidJs application to see how it works.

You can also use the `DefaultChart` components:

> **Note**: `DefaultChart` is a wrapper around `Chart` component, so you can use all the props from `Chart` component.
> `DefaultChart` component does _not_ have it's registerable elements registered by default, so you need to register them yourself.

`Chart` is the default `Chart.js` class, it can be access and used at any time.

```tsx
import { onMount } from 'solid-js'
import { Chart, 
         DefaultChart, 
         LineController, 
         CategoryScale,
         PointElement,
         LineElement, 
         LinearScale } from 'solid-chartjs'

const MyChart = () => {
    //* Register all the required elements and scales for a line chart
    onMount(() => {
        Chart.register(LineController, 
                       CategoryScale,
                       PointElement,
                       LineElement, 
                       LinearScale)
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
        <DefaultChart
            type="line"
            data={chartData}
            options={chartOptions}
            width={400}
            height={300}
        />
    )
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

<DefaultChart
    type="bar"
    data={chartData}
    options={chartOptions}
    fallback={fallback}
/>
```
