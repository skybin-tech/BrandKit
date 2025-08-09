import type { Meta, StoryObj } from '@storybook/react';
import GoogleButton from './';

const meta: Meta<typeof GoogleButton> = {
    title: 'Components/GoogleButton',  // Title for the story
    component: GoogleButton,
    parameters: {
        backgrounds: { default: 'light' },  // Default background for all stories
    },
};
export default meta;

type Story = StoryObj<typeof GoogleButton>;

// Light Theme Variant
export const Light: Story = {
    args: {
        onClick: () => alert('Google Button (Light) Clicked'),
        theme: 'light',  // Light theme
    },
    parameters: {
        backgrounds: {
            default: 'light',  // Light background for the Light variant
        },
    },
};

// Dark Theme Variant
export const Dark: Story = {
    args: {
        onClick: () => alert('Google Button (Dark) Clicked'),
        theme: 'dark',  // Dark theme
    },
    parameters: {
        backgrounds: {
            default: 'dark',  // Dark background for the Dark variant
        },
    },
};

// Neutral Theme Variant
export const Neutral: Story = {
    args: {
        onClick: () => alert('Google Button (Neutral) Clicked'),
        theme: 'neutral',  // Neutral theme
    },
    parameters: {
        backgrounds: {
            default: 'neutral',  // Neutral background for the Neutral variant
        },
    },
};
