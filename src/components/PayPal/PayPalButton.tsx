import React from 'react';
import styled, { css } from 'styled-components';
import PayPalIcon from './PayPalIcon';

export interface PayPalButtonProps {
  mode?: 'signin' | 'signup' | 'continue';
  dark?: boolean;
  shape?: 'square' | 'rounded';
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

// PayPal brand: PayPal Blue (#003087) is the sign-in button color with white text.
// Dark mode: PayPal's dark UI uses #1c3163 (dark navy) background.
const themes = {
  light: css`
    background: #003087;
    color: #ffffff;
    border: none;
    svg { fill: #ffffff; }
  `,
  dark: css`
    background: #1c3163;
    color: #ffffff;
    border: 1px solid #009cde;
    svg { fill: #009cde; }
  `,
};

const shapes = {
  square: css`border-radius: 4px;`,
  rounded: css`border-radius: 9999px;`,
};

const labels = {
  signin: 'Sign in with PayPal',
  signup: 'Sign up with PayPal',
  continue: 'Continue with PayPal',
};

const Button = styled.button<{
  $dark: boolean;
  $shape: 'square' | 'rounded';
  $width?: string | number;
  $height?: string | number;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${({ $width }) => (typeof $width === 'number' ? `${$width}px` : $width ?? 'auto')};
  height: ${({ $height }) => (typeof $height === 'number' ? `${$height}px` : $height ?? '40px')};
  padding: 0 16px;
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: filter 0.2s, box-shadow 0.2s;
  ${({ $dark }) => ($dark ? themes.dark : themes.light)};
  ${({ $shape }) => shapes[$shape]};

  &:hover:not(:disabled) {
    filter: brightness(0.92);
    box-shadow: 0 2px 4px rgba(0, 48, 135, 0.3);
  }

  &&:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }
`;

const PayPalButton: React.FC<PayPalButtonProps> = ({
  mode = 'signin',
  dark = false,
  shape = 'square',
  width,
  height,
  onClick,
  disabled,
  className,
}) => (
  <Button
    type="button"
    $dark={dark}
    $shape={shape}
    $width={width}
    $height={height}
    onClick={onClick}
    disabled={disabled}
    className={className}
    aria-label={labels[mode]}
  >
    <PayPalIcon />
    {labels[mode]}
  </Button>
);

export default PayPalButton;
