import type { Meta, StoryObj } from '@storybook/react';
import LinkedInButton from './LinkedInButton';

const meta: Meta<typeof LinkedInButton> = {
    title: 'Components/LinkedInButton',
    component: LinkedInButton,
    tags: ['autodocs'],
    argTypes: {
        mode: { control: 'radio', options: ['signin', 'signup', 'continue'] },
        dark: { control: 'boolean' },
        shape: { control: 'radio', options: ['square', 'rounded'] },
        width: { control: { type: 'text' } },
        height: { control: { type: 'text' } },
        disabled: { control: 'boolean' },
    },
    // LinkedIn Blue filled button is the canonical LinkedIn sign-in button.
    args: { mode: 'signin', dark: true, shape: 'square', disabled: false },
};
export default meta;

export const Dark: StoryObj = { args: { dark: true } };
export const Light: StoryObj = { args: { dark: false } };
export const Rounded: StoryObj = { args: { shape: 'rounded' } };
export const Signup: StoryObj = { args: { mode: 'signup' } };
export const Continue: StoryObj = { args: { mode: 'continue' } };
export const Disabled: StoryObj = { args: { disabled: true } };
