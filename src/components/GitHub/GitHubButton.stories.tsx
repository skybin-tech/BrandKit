// src/components/GitHubSocialBtn/GitHubSocialBtn.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import GitHubButton from './GitHubButton';

const meta: Meta<typeof GitHubButton> = {
    title: 'OAuth/GitHubSocialBtn',
    component: GitHubButton,
    argTypes: {
        mode: { control: 'radio', options: ['login', 'continue'] },
        dark: { control: 'boolean' },
    },
};
export default meta;

export const LightLogin: StoryObj = { args: { mode: 'login', dark: false } };
export const DarkLogin: StoryObj = { args: { mode: 'login', dark: true }, parameters: { backgrounds: { default: 'dark' } } };
export const LightContinue: StoryObj = { args: { mode: 'continue', dark: false } };
export const DarkContinue: StoryObj = { args: { mode: 'continue', dark: true }, parameters: { backgrounds: { default: 'dark' } } };