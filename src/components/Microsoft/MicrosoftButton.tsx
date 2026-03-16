import React from 'react';
import styled, { css } from 'styled-components';
import MicrosoftIcon from './MicrosoftIcon';

export interface MicrosoftButtonProps {
  mode?: 'signin' | 'signup' | 'continue';
  dark?: boolean;
  shape?: 'square' | 'rounded';
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const themes = {
  light: css`
    background: #ffffff;
    color: #1b1b1b;
    border: 1px solid #8c8c8c;
  `,
  dark: css`
    background: #2f2f2f;
    color: #ffffff;
    border: 1px solid #4a4a4a;
  `,
};

const shapes = {
  square: css`border-radius: 4px;`,
  rounded: css`border-radius: 9999px;`,
};

const labels = {
  signin: 'Sign in with Microsoft',
  signup: 'Sign up with Microsoft',
  continue: 'Continue with Microsoft',
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
  gap: 10px;
  width: ${({ $width }) => (typeof $width === 'number' ? `${$width}px` : $width ?? 'auto')};
  height: ${({ $height }) => (typeof $height === 'number' ? `${$height}px` : $height ?? '40px')};
  padding: 0 16px;
  font-family: 'Segoe UI', 'Roboto', Arial, sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow 0.2s, filter 0.2s;
  ${({ $dark }) => ($dark ? themes.dark : themes.light)};
  ${({ $shape }) => shapes[$shape]};

  &:hover:not(:disabled) {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
    filter: brightness(0.97);
  }

  &&:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }
`;

const MicrosoftButton: React.FC<MicrosoftButtonProps> = ({
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
    <MicrosoftIcon />
    {labels[mode]}
  </Button>
);

export default MicrosoftButton;
