// src/components/LinkedInLoginBtn/LinkedInLoginBtn.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import LinkedInButton from './LinkedInButton';

const meta: Meta<typeof LinkedInButton> = {
    title: 'Components/LinkedInButton',
    component: LinkedInButton,
    argTypes: {
        mode: { control: 'radio', options: ['login', 'continue'] },
        dark: { control: 'boolean' },
        disabled: { control: 'boolean' },
        shape: { control: 'radio', options: ['round', 'square'] },
    },
};
export default meta;

export const LightLoginRound: StoryObj = { args: { mode: 'login', dark: false, shape: 'round' } };
export const DarkLoginSquare: StoryObj = { args: { mode: 'login', dark: true, shape: 'square' }, parameters: { backgrounds: { default: 'dark' } } };
export const LightContinueRound: StoryObj = { args: { mode: 'continue', dark: false, shape: 'round' } };
export const DarkContinueSquare: StoryObj = { args: { mode: 'continue', dark: true, shape: 'square' }, parameters: { backgrounds: { default: 'dark' } } };
export const DisabledRound: StoryObj = { args: { mode: 'login', dark: false, disabled: true, shape: 'round' } };