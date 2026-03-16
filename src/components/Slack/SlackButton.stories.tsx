import type { Meta, StoryObj } from '@storybook/react';
import SlackButton from './SlackButton';

const meta: Meta<typeof SlackButton> = {
    title: 'Components/SlackButton',
    component: SlackButton,
    tags: ['autodocs'],
    argTypes: {
        mode: { control: 'radio', options: ['signin', 'signup', 'continue'] },
        dark: { control: 'boolean' },
        shape: { control: 'radio', options: ['square', 'rounded'] },
        width: { control: { type: 'text' } },
        height: { control: { type: 'text' } },
        disabled: { control: 'boolean' },
    },
    // Light (white) is the canonical "Sign in with Slack" button per Slack brand guidelines.
    args: { mode: 'signin', dark: false, shape: 'square', disabled: false },
};
export default meta;

export const Light: StoryObj = { args: { dark: false } };
export const Dark: StoryObj = { args: { dark: true }, parameters: { backgrounds: { default: 'dark' } } };
export const Rounded: StoryObj = { args: { shape: 'rounded' } };
export const Signup: StoryObj = { args: { mode: 'signup' } };
export const Continue: StoryObj = { args: { mode: 'continue' } };
export const Disabled: StoryObj = { args: { disabled: true } };
