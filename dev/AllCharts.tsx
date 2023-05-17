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

const App: Component = () => {
    const [refLine, setRefLine] = createSignal()
    const [refBar, setRefBar] = createSignal()
    const [refRadar, setRefRadar] = createSignal()
    const [refDoughnut, setRefDoughnut] = createSignal()
    const [refPolarArea, setRefPolarArea] = createSignal()
    const [refPie, setRefPie] = createSignal()
    const [refBubble, setRefBubble] = createSignal()
    const [refScatter, setRefScatter] = createSignal()

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
        console.debug('[Chart Ref]: Line', refLine())
        console.debug('[Chart Ref]: Bar', refBar())
        console.debug('[Chart Ref]: Radar', refRadar())
        console.debug('[Chart Ref]: Doughnut', refDoughnut())
        console.debug('[Chart Ref]: PolarArea', refPolarArea())
        console.debug('[Chart Ref]: Pie', refPie())
        console.debug('[Chart Ref]: Bubble', refBubble())
        console.debug('[Chart Ref]: Scatter', refScatter())
    })

    return (
        <div>
            <Line ref={setRefLine} data={data} options={options} fallbackContent="Loading..." />
            <Bar ref={setRefBar} data={data} options={options} fallbackContent="Loading..." />
            <Radar ref={setRefRadar} data={data} options={options} fallbackContent="Loading..." />
            <Doughnut
                ref={setRefDoughnut}
                data={data}
                options={options}
                fallbackContent="Loading..."
            />
            <PolarArea
                ref={setRefPolarArea}
                data={data}
                options={options}
                fallbackContent="Loading..."
            />
            <Pie ref={setRefPie} data={data} options={options} fallbackContent="Loading..." />
            <Bubble ref={setRefBubble} data={data} options={options} fallbackContent="Loading..." />
            <Scatter
                ref={setRefScatter}
                data={data}
                options={options}
                fallbackContent="Loading..."
            />
        </div>
    )
}

export default App
