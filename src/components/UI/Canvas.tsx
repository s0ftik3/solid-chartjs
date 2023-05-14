import { onMount } from 'solid-js'

export interface CanvasProps {
    id: string
    onMount: (canvas: HTMLCanvasElement) => void
    width?: string | number
    height?: string | number
}

export const Canvas = (props: CanvasProps) => {
    onMount(() => {
        const canvas = document.getElementById(props.id) as HTMLCanvasElement
        props.onMount(canvas)
    })

    return (
        <canvas
            id={props.id}
            width={props.width ?? 512}
            height={props.height ?? 256}
        />
    )
}
