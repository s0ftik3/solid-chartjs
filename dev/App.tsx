import { ChartData, ChartTypeRegistry, Colors } from 'chart.js'
import { createSignal, For, onMount } from 'solid-js'
import { createStore } from 'solid-js/store'
import { Chart, DefaultChart, Title, Tooltip, Legend } from '../src'
import styles from './App.module.css'
import { generateRandomChartData, generateRandomDataset } from './utils'
import type { Component } from 'solid-js'

const App: Component = () => {
    const [chartData, setChartData] = createSignal<ChartData>(generateRandomChartData())
    const [ref, setRef] = createSignal<HTMLCanvasElement | null>(null)
    const [chartConfig, setChartConfig] = createStore({
        width: 700,
        height: 400,
    })

    const chartTypes: (keyof ChartTypeRegistry)[] = [
        'line',
        'bar',
        'doughnut',
        'radar',
        'polarArea',
        'bubble',
        'pie',
        'scatter',
    ]
    const [chartType, setChartType] = createSignal<keyof ChartTypeRegistry | undefined>(
        chartTypes[0],
    )

    const onRandomizeClick = () => {
        setChartData((prev) => generateRandomChartData(prev.datasets.length))
    }
    const onAddDatasetClick = () => {
        setChartData((prev) => {
            const datasets = prev.datasets
            datasets.push(generateRandomDataset(prev.labels as string[], prev.datasets.length + 1))
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

    const onDimensionsInput = (type: 'width' | 'height', event: any) => {
        setChartConfig(type, () => +event.target.value)
    }

    const onTypeSelect = (event: any) => {
        setChartType(event.target.value as keyof ChartTypeRegistry)
    }

    onMount(() => {
        Chart.register(Title, Tooltip, Legend, Colors)
        console.debug('[Chart Ref]:', ref())
    })

    return (
        <div class={styles.container}>
            <div class={styles.chart}>
                <DefaultChart
                    ref={setRef}
                    width={chartConfig.width}
                    height={chartConfig.height}
                    fallback={<p>Chart is not available</p>}
                    type={chartType()!}
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
            <div class={styles.inputGroup}>
                <select class={styles.selectField} name="types" onChange={onTypeSelect}>
                    <For each={chartTypes}>
                        {(type) => (
                            <option value={type} selected={chartType() === type}>
                                {type}
                            </option>
                        )}
                    </For>
                </select>
                <input
                    class={styles.inputField}
                    type="number"
                    placeholder="Width"
                    value={chartConfig.width}
                    onInput={(event) => onDimensionsInput('width', event)}
                />
                <input
                    class={styles.inputField}
                    type="number"
                    placeholder="Height"
                    value={chartConfig.height}
                    onInput={(event) => onDimensionsInput('height', event)}
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
