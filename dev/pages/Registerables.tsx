import { Chart, ChartData, Title, Tooltip, Legend, Colors } from 'chart.js'
import { createSignal, onMount } from 'solid-js'
import { createStore } from 'solid-js/store'
import { DefaultChart } from '../../src'
import styles from '../styles/App.module.css'
import { generateRandomChartData } from '../utils'
import type { Component } from 'solid-js'

const RegisterablesPage: Component = () => {
    const [refBar, setRefBar] = createSignal()
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

    onMount(() => {
        Chart.register(Title, Tooltip, Legend, Colors)
        console.debug('[Chart Ref]: Bar', refBar())
    })

    return (
        <div class={styles.container}>
            <div class={styles.chart}>
                <DefaultChart
                    ref={setRefBar}
                    width={chartConfig.width}
                    height={chartConfig.height}
                    fallback={fallback()}
                    type={'bar'}
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

export default RegisterablesPage
