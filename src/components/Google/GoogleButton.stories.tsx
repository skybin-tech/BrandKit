import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import GoogleButton from './GoogleButton';
import type { GoogleButtonProps, GoogleButtonShape, GoogleButtonTheme, GoogleButtonVariant } from './GoogleButton.types';


const themes: GoogleButtonTheme[] = ['light', 'dark', 'neutral'];
const shapes: GoogleButtonShape[] = ['rounded', 'square'];
const variants: GoogleButtonVariant[] = ['SI', 'SU', 'ctn', 'na'];

const meta: Meta<typeof GoogleButton> = {
    title: 'Components/GoogleButton',
    component: GoogleButton,
    args: {
        theme: 'light',
        shape: 'rounded',
        variant: 'SI',
        height: 48,
        disabled: false,
    },
    argTypes: {
        theme: {
            control: 'inline-radio',
            options: themes,
        },
        shape: {
            control: 'inline-radio',
            options: shapes,
        },
        variant: {
            control: 'inline-radio',
            options: variants,
        },
        height: {
            control: { type: 'number', min: 32, max: 80, step: 2 },
        },
        onClick: { action: 'clicked' },
        className: { control: false },
        alt: { control: 'text' },
    },
    parameters: {
        docs: {
            description: {
                component:
                    'Google sign buttons rendered from SVG assets. Variants: **SI**, **SU**, **ctn**, **na**. Shapes: rounded/square. Themes: light/dark/neutral.',
            },
        },
    },
};
export default meta;

type Story = StoryObj<typeof GoogleButton>;

export const Playground: Story = {};

export const AllVariants: Story = {
    render: (args: GoogleButtonProps) => (
        <div style={{ display: 'grid', gap: 16 }}>
            {variants.map((v) => (
                <div key={v} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    {themes.map((t) => (
                        <div key={`${v}-${t}`} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                            <GoogleButton {...args} theme={t} shape="rounded" variant={v} />
                            <GoogleButton {...args} theme={t} shape="square" variant={v} />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    ),
    args: { height: 48 },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        theme: 'neutral',
        shape: 'rounded',
        variant: 'ctn',
    },
};

export const CustomHeight: Story = {
    args: {
        height: 40,
        theme: 'dark',
        shape: 'square',
        variant: 'na',
    },
};
