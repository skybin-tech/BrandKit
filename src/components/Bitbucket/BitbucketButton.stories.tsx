import type { Meta, StoryObj } from '@storybook/react';
import BitbucketButton from './BitbucketButton';

const meta: Meta<typeof BitbucketButton> = {
    title: 'Components/BitbucketButton',
    component: BitbucketButton,
    tags: ['autodocs'],
    argTypes: {
        mode: { control: 'radio', options: ['signin', 'signup', 'continue'] },
        dark: { control: 'boolean' },
        shape: { control: 'radio', options: ['square', 'rounded'] },
        width: { control: { type: 'text' } },
        height: { control: { type: 'text' } },
        disabled: { control: 'boolean' },
    },
    args: { mode: 'signin', dark: false, shape: 'square', disabled: false },
};
export default meta;

export const Light: StoryObj = { args: { dark: false } };
export const Dark: StoryObj = { args: { dark: true }, parameters: { backgrounds: { default: 'dark' } } };
export const Rounded: StoryObj = { args: { shape: 'rounded' } };
export const Signup: StoryObj = { args: { mode: 'signup' } };
export const Continue: StoryObj = { args: { mode: 'continue' } };
export const Disabled: StoryObj = { args: { disabled: true } };
