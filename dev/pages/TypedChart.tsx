import 'chart.js/auto'
import { ChartData } from 'chart.js'
import { createSignal } from 'solid-js'
import { createStore } from 'solid-js/store'
import { Line } from '../../src'
import styles from '../styles/App.module.css'
import { generateRandomChartData } from '../utils'
import type { Component } from 'solid-js'

const TypedChartPage: Component = () => {
    const [chartData] = createSignal<ChartData>(generateRandomChartData())
    const [chartConfig] = createStore({
        width: 700,
        height: 400,
    })

    const fallback = () => {
        return (
            <div>
                <p>Chart is not available</p>
            </div>
        )
    }

    return (
        <div class={styles.container}>
            <div class={styles.chart}>
                <Line
                    width={chartConfig.width}
                    height={chartConfig.height}
                    fallback={fallback()}
                    data={chartData()}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            title: {
                                display: true,
                                text: 'Solid Chart.js implementation',
                            },
                            colors: {
                                forceOverride: true,
                            },
                        },
                    }}
                />
            </div>
        </div>
    )
}

export default TypedChartPage
