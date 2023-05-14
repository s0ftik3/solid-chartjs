import styles from './App.module.css'
import type { Component } from 'solid-js'
import { SolidChartJs } from '../src'
import {
    generateRandomChartData,
    generateRandomDataset,
} from '../src/utils/random'
import { createSignal } from 'solid-js'
import { ChartData } from 'chart.js'

const App: Component = () => {
    const [chartData, setChartData] = createSignal<ChartData>(
        generateRandomChartData()
    )

    const onRandomizeClick = () => {
        setChartData((prev) => generateRandomChartData(prev.datasets.length))
    }
    const onAddDatasetClick = () => {
        setChartData((prev) => {
            const datasets = prev.datasets
            datasets.push(
                generateRandomDataset(
                    prev.labels as string[],
                    prev.datasets.length + 1
                )
            )
            return { ...prev, datasets }
        })
    }
    const onRemoveDatasetClick = () => {
        setChartData((prev) => {
            const datasets = prev.datasets
            datasets.pop()
            return { ...prev, datasets }
        })
    }

    return (
        <div class={styles.container}>
            <div class={styles.chart}>
                <SolidChartJs
                    height={400}
                    width={700}
                    type={'line'}
                    data={chartData()}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            title: {
                                display: true,
                                text: 'Solid Chart.js implementation',
                            },
                        },
                    }}
                />
            </div>
            <div class={styles.buttonGroup}>
                <button onClick={onRandomizeClick}>Randomize</button>
                <button onClick={onAddDatasetClick}>Add Dataset</button>
                <button onClick={onRemoveDatasetClick}>Remove Dataset</button>
            </div>
        </div>
    )
}

export default App
