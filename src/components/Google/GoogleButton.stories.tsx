import type { Meta, StoryObj } from '@storybook/react';
import GoogleButton from './GoogleButton';

const meta: Meta<typeof GoogleButton> = {
    title: 'Components/GoogleButton',
    component: GoogleButton,
    tags: ['autodocs'],
    argTypes: {
        mode: { control: 'radio', options: ['signin', 'signup', 'continue'] },
        dark: { control: 'boolean' },
        shape: { control: 'radio', options: ['square', 'rounded'] },
        width: { control: { type: 'text' } },
        height: { control: { type: 'text' } },
        disabled: { control: 'boolean' },
    },
    args: {
        mode: 'signin',
        dark: false,
        shape: 'square',
        disabled: false,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllVariants: Story = {
    render: () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {([false, true] as const).map((dark) =>
                (['square', 'rounded'] as const).map((shape) =>
                    (['signin', 'signup', 'continue'] as const).map((mode) => (
                        <GoogleButton
                            key={`${dark}-${shape}-${mode}`}
                            dark={dark}
                            shape={shape}
                            mode={mode}
                        />
                    )),
                ),
            )}
        </div>
    ),
};
