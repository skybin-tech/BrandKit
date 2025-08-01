// src/components/OAuthButtons/GoogleLoginBtn.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import GoogleButton from './GoogleButton';

const meta: Meta<typeof GoogleButton> = {
    title: 'OAuth/GoogleLoginBtn',
    component: GoogleButton,
    parameters: {
        // Optional: let users toggle light/dark in Storybook toolbar
        backgrounds: { default: 'light' },
    },
};
export default meta;

type Story = StoryObj<typeof GoogleButton>;

export const Light: Story = {
    args: {
        onClick: () => alert('Google (light)'),
    },
};

export const Dark: Story = {
    parameters: {
        backgrounds: { default: 'dark' },
    },
    args: {
        onClick: () => alert('Google (dark)'),
    },
};