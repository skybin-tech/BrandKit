import React from 'react';
import styled, { css } from 'styled-components';
import SpotifyIcon from './SpotifyIcon';

export interface SpotifyButtonProps {
  mode?: 'signin' | 'signup' | 'continue';
  dark?: boolean;
  shape?: 'square' | 'rounded';
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

// Spotify brand: Spotify Green (#1DB954) button with BLACK text (never white) per their guidelines.
// Dark mode: Spotify's dark UI uses #121212 background — the green button sits on top.
const themes = {
  light: css`
    background: #1db954;
    color: #000000;
    border: none;
    svg { fill: #000000; }
  `,
  dark: css`
    background: #121212;
    color: #1db954;
    border: 1px solid #1db954;
    svg { fill: #1db954; }
  `,
};

const shapes = {
  square: css`border-radius: 4px;`,
  rounded: css`border-radius: 9999px;`,
};

const labels = {
  signin: 'Sign in with Spotify',
  signup: 'Sign up with Spotify',
  continue: 'Continue with Spotify',
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
  font-family: 'Circular', 'Roboto', Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: filter 0.2s, box-shadow 0.2s;
  ${({ $dark }) => ($dark ? themes.dark : themes.light)};
  ${({ $shape }) => shapes[$shape]};

  &:hover:not(:disabled) {
    filter: brightness(0.92);
    box-shadow: 0 2px 4px rgba(29, 185, 84, 0.3);
  }

  &&:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }
`;

const SpotifyButton: React.FC<SpotifyButtonProps> = ({
  mode = 'signin',
  dark = false,
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
    <SpotifyIcon />
    {labels[mode]}
  </Button>
);

export default SpotifyButton;
