import React from 'react';
import styled, { css } from 'styled-components';
import FacebookIcon from './FacebookIcon';

export interface FacebookButtonProps {
  mode?: 'signin' | 'signup' | 'continue';
  dark?: boolean;
  shape?: 'square' | 'rounded';
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

// Meta brand: primary is Facebook Blue (#1877F2) with white text.
// Dark mode: Meta's dark UI uses #242526 background — the button becomes a dark container
// with white text and a subtly lighter blue icon tint.
const themes = {
  light: css`
    background: #1877f2;
    color: #ffffff;
    border: none;
    svg { fill: #ffffff; }
  `,
  dark: css`
    background: #242526;
    color: #ffffff;
    border: 1px solid #3a3b3c;
    svg { fill: #1877f2; }
  `,
};

const shapes = {
  square: css`border-radius: 6px;`,
  rounded: css`border-radius: 9999px;`,
};

const labels = {
  signin: 'Sign in with Facebook',
  signup: 'Sign up with Facebook',
  continue: 'Continue with Facebook',
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
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: filter 0.2s, box-shadow 0.2s;
  ${({ $dark }) => ($dark ? themes.dark : themes.light)};
  ${({ $shape }) => shapes[$shape]};

  &:hover:not(:disabled) {
    filter: brightness(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  }

  &&:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }
`;

const FacebookButton: React.FC<FacebookButtonProps> = ({
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
    <FacebookIcon />
    {labels[mode]}
  </Button>
);

export default FacebookButton;
