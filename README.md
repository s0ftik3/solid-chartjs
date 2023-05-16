<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solid-chartjs&background=tiles&project=%20" alt="solid-chartjs">
</p>

# solid-chartjs

[![version](https://badgen.net/npm/v/solid-chartjs)](https://npmjs.com/package/solid-chartjs)
[![downloads](https://badgen.net/npm/dm/solid-chartjs)](https://www.npmjs.com/package/solid-chartjs)
[![telegram chat](https://img.shields.io/badge/Ask%20a%20Question-Telegram-blue)](https://t.me/vychs)

The `ChartJs` component is a SolidJS wrapper around the Chart.js library, allowing you to easily create interactive charts in your SolidJS applications.

- [Quick start](#quick-start)
- [Usage](#usage)
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
import { ChartJs } from 'solid-chartjs'

function MyChart() {
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
        <ChartJs
            type="line"
            data={chartData}
            options={chartOptions}
            width={400}
            height={300}
        />
    )
}
```

## Chart Props
| Prop        | Description                                    | Type    |
|-------------|------------------------------------------------|---------|
| width       | The width of the chart canvas in pixels.        | number \| undefined   |
| height      | The height of the chart canvas in pixels.       | number \| undefined   |
| fallback    | A fallback element to display when chart fails. | JSX.Element |
| type        | The type of the chart.                          | keyof [ChartTypeRegistry](https://www.chartjs.org/docs/latest/api/interfaces/ChartTypeRegistry.html) |
| data        | The chart data object.                          | [ChartData](https://www.chartjs.org/docs/latest/api/interfaces/ChartData.html) \| undefined |
| options     | The chart options object.                       | [ChartOptions](https://www.chartjs.org/docs/latest/api/interfaces/CoreChartOptions.html) \| undefined |

## Examples
Check out `/dev` folder and run the SolidJs application to see how it works.

You can also use typed charts components:
```tsx
import { Line, Bar, Doughnut, Radar, PolarArea, Bubble, Pie, Scatter } from './typedCharts'

<Line data={data} options={options} width={500} height={500} />
<Bar data={data} options={options} width={500} height={500} />
<Doughnut data={data} options={options} width={500} height={500} />
// ...etc
```

Usage of `fallback` prop:
```tsx
<ChartJs
    type="bar"
    data={chartData}
    options={chartOptions}
    fallback={<p>Chart is not available</p>}
/>
```