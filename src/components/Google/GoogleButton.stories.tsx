// src/components/GoogleButton/GoogleButton.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import GoogleButton from './GoogleButton';
import type { GoogleButtonTheme, GoogleButtonShape, GoogleButtonVariant } from './GoogleButton.types';

const meta: Meta<typeof GoogleButton> = {
    title: 'Components/GoogleButton',
    component: GoogleButton,
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: 'radio',
            options: ['light', 'dark'] satisfies GoogleButtonTheme[],
        },
        shape: {
            control: 'radio',
            options: ['square', 'rounded'] satisfies GoogleButtonShape[],
        },
        variant: {
            control: 'radio',
            options: ['SI', 'SU', 'ctn'] satisfies GoogleButtonVariant[],
        },
        width: { control: { type: 'text' } },
        height: { control: { type: 'text' } },
        disabled: { control: 'boolean' },
    },
    args: {
        theme: 'light',
        shape: 'square',
        variant: 'SI',
        width: undefined,
        height: undefined,
        disabled: false,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* ---- Single playground story ---- */
export const Playground: Story = {};

/* ---- Matrix of all compliant combos ---- */
export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {(['light', 'dark'] as const).map((theme) =>
                (['square', 'rounded'] as const).map((shape) =>
                    (['SI', 'SU', 'ctn'] as const).map((variant) => (
                        <GoogleButton
                            key={`${theme}-${shape}-${variant}`}
                            theme={theme}
                            shape={shape}
                            variant={variant}
                        />
                    )),
                ),
            )}
        </div>
    ),
};