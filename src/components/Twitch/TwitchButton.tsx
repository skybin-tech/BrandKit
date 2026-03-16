import React from 'react';
import styled, { css } from 'styled-components';
import TwitchIcon from './TwitchIcon';

export interface TwitchButtonProps {
  mode?: 'signin' | 'signup' | 'continue';
  dark?: boolean;
  shape?: 'square' | 'rounded';
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

// Twitch brand: primary is TwitchPurple (#9146FF) on light pages.
// Dark mode uses Core Black (#0e0e10) — Twitch's official dark theme background.
const themes = {
  light: css`
    background: #9146ff;
    color: #ffffff;
    border: none;
    svg { fill: #ffffff; }
  `,
  dark: css`
    background: #0e0e10;
    color: #9146ff;
    border: 1px solid #9146ff;
    svg { fill: #9146ff; }
  `,
};

const shapes = {
  square: css`border-radius: 4px;`,
  rounded: css`border-radius: 9999px;`,
};

const labels = {
  signin: 'Sign in with Twitch',
  signup: 'Sign up with Twitch',
  continue: 'Continue with Twitch',
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
  font-weight: 600;
  cursor: pointer;
  transition: filter 0.2s, box-shadow 0.2s;
  ${({ $dark }) => ($dark ? themes.dark : themes.light)};
  ${({ $shape }) => shapes[$shape]};

  &:hover:not(:disabled) {
    filter: brightness(0.9);
    box-shadow: 0 2px 4px rgba(145, 70, 255, 0.35);
  }

  &&:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }
`;

const TwitchButton: React.FC<TwitchButtonProps> = ({
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
    <TwitchIcon />
    {labels[mode]}
  </Button>
);

export default TwitchButton;
