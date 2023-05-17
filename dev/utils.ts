import { ChartData, ChartDataset } from 'chart.js'
import { number } from 'minifaker'

export const generateRandomDataset = (labels: string[], index: number) => ({
    label: 'Dataset ' + index,
    data: labels.map(() => number({ min: -100, max: 100 })),
})

export const generateRandomChartData = (datasetsLength = 2): ChartData => {
    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    const datasets: ChartDataset[] = []

    for (let i = 0; i < datasetsLength; i++) {
        datasets.push(generateRandomDataset(labels, i + 1))
    }

    return {
        labels,
        datasets,
    }
}
