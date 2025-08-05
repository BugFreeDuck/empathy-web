import type {Snippet} from "svelte";

export type Font = 'marcellus' | 'redhat';
export type Weight = 'normal' | 'bold';
export type Color = 'black' | 'white' | 'gray' | 'sand';
export type Alignment = 'left' | 'right' | 'center' | 'justify';

export interface TextProps {
    size?: number,
    font?: Font,
    weight?: Weight,
    color?: Color,
    alignment?: Alignment,
    children?: Snippet
}

export interface RenderParameters {
    size: number;
    font: string;
    weight: number;
    color: string;
    alignment: string;
}

export function parseRenderParameters(props: TextProps): RenderParameters {
    let size = props.size ?? 12;
    let color = props.color ?? 'gray';
    let font = props.font ?? 'redhat';
    let weight = props.weight ?? 'normal';
    let alignment = props.alignment ?? 'justify';

    return {
        size: size,
        color: colors[color],
        font: fonts[font],
        weight: weights[weight],
        alignment: alignment
    }
}

const colors: Record<Color, string> = {
    'white': '#F3EEEA',
    'gray': '#5F5B5B',
    'black': '#5D4B3D',
    'sand': '#E5DACF'
}

const fonts: Record<Font, string> = {
    'marcellus': 'Marcellus, serif',
    'redhat': 'Red Hat Display, sans-serif'
}

const weights: Record<Weight, number> = {
    'normal': 400,
    'bold': 600
}