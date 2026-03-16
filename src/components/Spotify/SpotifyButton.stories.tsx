import type { Meta, StoryObj } from '@storybook/react';
import SpotifyButton from './SpotifyButton';

const meta: Meta<typeof SpotifyButton> = {
    title: 'Components/SpotifyButton',
    component: SpotifyButton,
    tags: ['autodocs'],
    argTypes: {
        mode: { control: 'radio', options: ['signin', 'signup', 'continue'] },
        dark: { control: 'boolean' },
        shape: { control: 'radio', options: ['square', 'rounded'] },
        width: { control: { type: 'text' } },
        height: { control: { type: 'text' } },
        disabled: { control: 'boolean' },
    },
    // Spotify green with black text is the canonical button per Spotify brand guidelines.
    args: { mode: 'signin', dark: false, shape: 'rounded', disabled: false },
};
export default meta;

export const Light: StoryObj = { args: { dark: false } };
export const Dark: StoryObj = { args: { dark: true }, parameters: { backgrounds: { default: 'dark' } } };
export const Square: StoryObj = { args: { shape: 'square' } };
export const Signup: StoryObj = { args: { mode: 'signup' } };
export const Continue: StoryObj = { args: { mode: 'continue' } };
export const Disabled: StoryObj = { args: { disabled: true } };
