import { number } from 'minifaker'
import { Component, createSignal, onMount } from 'solid-js'
import {
    Chart,
    Line,
    Bar,
    Radar,
    Doughnut,
    PolarArea,
    Bubble,
    Pie,
    Scatter,
    Title,
    Tooltip,
    Legend,
} from '../src'
import styles from './App.module.css'
import logo from './logo.svg'

const App: Component = () => {
    const [ref, setRef] = createSignal()

    const options = {
        responsive: true,
        redraw: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js & SolidJS',
            },
        },
    }

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }

    onMount(() => {
        Chart.register(Title, Tooltip, Legend)
        console.debug('[Chart Ref]: ref', ref())
    })

    return (
        <div class={styles.App}>
            <header class={styles.header}>
                <img src={logo} class={styles.logo} alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    class={styles.link}
                    href="https://github.com/solidjs/solid"
                    target="_blank"
                    rel="noopener noreferrer">
                    Learn Solid
                </a>
            </header>

            <Line ref={setRef} data={data} options={options} fallbackContent="Loading..." />
            <Bar ref={setRef} data={data} options={options} fallbackContent="Loading..." />
            <Radar ref={setRef} data={data} options={options} fallbackContent="Loading..." />
            <Doughnut ref={setRef} data={data} options={options} fallbackContent="Loading..." />
            <PolarArea ref={setRef} data={data} options={options} fallbackContent="Loading..." />
            <Pie ref={setRef} data={data} options={options} fallbackContent="Loading..." />
            <Bubble ref={setRef} data={data} options={options} fallbackContent="Loading..." />
            <Scatter ref={setRef} data={data} options={options} fallbackContent="Loading..." />
        </div>
    )
}

export default App
