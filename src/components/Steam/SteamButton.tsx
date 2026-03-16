import React from 'react';
import styled, { css } from 'styled-components';
import SteamIcon from './SteamIcon';

export interface SteamButtonProps {
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
    color: #1b2838;
    border: 1px solid #1b2838;
    svg { fill: #1b2838; }
  `,
  dark: css`
    background: #1b2838;
    color: #c6d4df;
    border: none;
    svg { fill: #c6d4df; }
  `,
};

const shapes = {
  square: css`border-radius: 4px;`,
  rounded: css`border-radius: 9999px;`,
};

const labels = {
  signin: 'Sign in with Steam',
  signup: 'Sign up with Steam',
  continue: 'Continue with Steam',
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
    filter: brightness(1.1);
    box-shadow: 0 2px 4px rgba(27, 40, 56, 0.4);
  }

  &&:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }
`;

const SteamButton: React.FC<SteamButtonProps> = ({
  mode = 'signin',
  dark = true,
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
    <SteamIcon />
    {labels[mode]}
  </Button>
);

export default SteamButton;
