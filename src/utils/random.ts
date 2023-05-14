export const fillArrayWithRandomNumbers = (
    min: number,
    max: number,
    length: number = 10
) => {
    const array = []

    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min)) + min
        array.push(randomNumber)
    }

    return array
}

export const generateRandomString = (length: number = 5): string => {
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length)
        result += chars.charAt(randomIndex)
    }

    return result
}

export function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const generateRandomDataset = (labels: string[], index: number) => ({
    label: 'Dataset ' + index,
    data: fillArrayWithRandomNumbers(
        generateRandomNumber(10, 500),
        generateRandomNumber(501, 1000),
        labels.length
    ),
})

export const generateRandomChartData = (datasetsLength: number = 2) => {
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
    const datasets = []

    for (let i = 0; i < datasetsLength; i++) {
        datasets.push(generateRandomDataset(labels, i + 1))
    }

    return {
        labels,
        datasets,
    }
}
