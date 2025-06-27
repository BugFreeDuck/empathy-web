import type {Snippet} from "svelte";

export type Font = 'arsenal' | 'cormorant';
export type Weight = 'normal' | 'bold';
export type Color = 'black' | 'white' | 'gray';

export interface TextProps {
    size?: number,
    font?: Font,
    weight?: Weight,
    color?: Color,
    children?: Snippet
}

export interface RenderParameters {
    size: number;
    font: string;
    weight: number;
    color: string;
}

export function parseRenderParameters(props: TextProps): RenderParameters {
    let size = props.size ?? 12;
    let color = props.color ?? 'black';
    let font = props.font ?? 'arsenal';
    let weight = props.weight ?? 'normal';

    return {
        size: size,
        color: colors[color],
        font: fonts[font],
        weight: weights[weight],
    }
}

const colors: Record<Color, string> = {
    'white': '#FFFFFF',
    'gray': '#5F5B5B',
    'black': '#5D4B3D'
}

const fonts: Record<Font, string> = {
    'arsenal': 'Arsenal, serif',
    'cormorant': 'Cormorant Garamond, serif'
}

const weights: Record<Weight, number> = {
    'normal': 400,
    'bold': 800
}