import React from 'react';
import styled, { css } from 'styled-components';
import TikTokIcon from './TikTokIcon';

export interface TikTokButtonProps {
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
    color: #000000;
    border: 1px solid #000000;
    svg { fill: #000000; }
  `,
  dark: css`
    background: #000000;
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
  signin: 'Sign in with TikTok',
  signup: 'Sign up with TikTok',
  continue: 'Continue with TikTok',
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
    filter: brightness(0.9);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &&:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }
`;

const TikTokButton: React.FC<TikTokButtonProps> = ({
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
    <TikTokIcon />
    {labels[mode]}
  </Button>
);

export default TikTokButton;
