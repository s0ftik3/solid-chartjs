import { ChartData, ChartDataset } from 'chart.js'

export const fillArrayWithRandomNumbers = (min: number, max: number, length = 10) => {
    const array: number[] = []

    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min)) + min
        array.push(randomNumber)
    }

    return array
}

export function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const generateRandomColors = (length: number) => {
    const colors: string[] = []
    for (let i = 0; i < length; i++) {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
        colors.push(randomColor)
    }
    return colors
}

export const generateRandomDataset = (labels: string[], index: number) => ({
    label: 'Dataset ' + index,
    borderColor: generateRandomColors(1)[0],
    backgroundColor: generateRandomColors(1)[0],
    data: fillArrayWithRandomNumbers(
        generateRandomNumber(10, 500),
        generateRandomNumber(501, 1000),
        labels.length,
    ),
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
