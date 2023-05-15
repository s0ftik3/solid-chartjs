import { mergeProps } from 'solid-js'

export interface CanvasProps {
    onMount: (canvas: HTMLCanvasElement) => void
    width?: string | number
    height?: string | number
}

export const Canvas = (props: CanvasProps) => {
    const merged = mergeProps(
        {
            onMount: () => {},
            width: 512,
            height: 512,
        },
        props
    )

    return (
        <canvas
            ref={merged.onMount}
            width={merged.width}
            height={merged.height}
        />
    )
}
