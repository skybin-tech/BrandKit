import React from 'react';
import styled, { css } from 'styled-components';
import TwitterIcon from './TwitterIcon';

export interface TwitterButtonProps {
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
    color: #0f1419;
    border: 1px solid #cfd9de;
    svg { fill: #0f1419; }
  `,
  dark: css`
    background: #0f1419;
    color: #ffffff;
    border: none;
    svg { fill: #ffffff; }
  `,
};

const shapes = {
  square: css`border-radius: 4px;`,
  rounded: css`border-radius: 9999px;`,
};

const labels = {
  signin: 'Sign in with X',
  signup: 'Sign up with X',
  continue: 'Continue with X',
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
  transition: box-shadow 0.2s, filter 0.2s;
  ${({ $dark }) => ($dark ? themes.dark : themes.light)};
  ${({ $shape }) => shapes[$shape]};

  &:hover:not(:disabled) {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
    filter: brightness(0.95);
  }

  &&:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }
`;

const TwitterButton: React.FC<TwitterButtonProps> = ({
  mode = 'signin',
  dark = true,
  shape = 'rounded',
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
    <TwitterIcon />
    {labels[mode]}
  </Button>
);

export default TwitterButton;
