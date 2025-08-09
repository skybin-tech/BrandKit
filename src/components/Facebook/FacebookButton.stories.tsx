import type { Meta, StoryObj } from '@storybook/react';
import FacebookButton from './';

const meta: Meta<typeof FacebookButton> = {
    title: 'OAuth/FacebookLoginBtn',
    component: FacebookButton,
    argTypes: {
        mode: { control: 'radio', options: ['login', 'continue'] },
        variant: { control: 'radio', options: ['filled', 'outline'] },
    },
};
export default meta;

export const FilledLogin: StoryObj = {
    args: { mode: 'login', variant: 'filled' },
};

export const OutlineLogin: StoryObj = {
    args: { mode: 'login', variant: 'outline' },
};

export const FilledContinue: StoryObj = {
    args: { mode: 'continue', variant: 'filled' },
};

export const OutlineContinue: StoryObj = {
    args: { mode: 'continue', variant: 'outline' },
};