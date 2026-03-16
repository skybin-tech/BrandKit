import type { Meta, StoryObj } from '@storybook/react';
import TwitterButton from './TwitterButton';

const meta: Meta<typeof TwitterButton> = {
    title: 'Components/TwitterButton',
    component: TwitterButton,
    tags: ['autodocs'],
    argTypes: {
        mode: { control: 'radio', options: ['signin', 'signup', 'continue'] },
        dark: { control: 'boolean' },
        shape: { control: 'radio', options: ['square', 'rounded'] },
        width: { control: { type: 'text' } },
        height: { control: { type: 'text' } },
        disabled: { control: 'boolean' },
    },
    args: {
        mode: 'signin',
        dark: true,
        shape: 'rounded',
        disabled: false,
    },
};

export default meta;

export const Dark: StoryObj = { args: { dark: true } };
export const Light: StoryObj = { args: { dark: false } };
export const Square: StoryObj = { args: { shape: 'square' } };
export const Signup: StoryObj = { args: { mode: 'signup' } };
export const Continue: StoryObj = { args: { mode: 'continue' } };
export const Disabled: StoryObj = { args: { disabled: true } };
