import React from 'react';
import styled, { css } from 'styled-components';
import SlackIcon from './SlackIcon';

export interface SlackButtonProps {
  mode?: 'signin' | 'signup' | 'continue';
  dark?: boolean;
  shape?: 'square' | 'rounded';
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

// Slack brand: official "Sign in with Slack" button is white with dark text — NOT the purple filled button.
// Purple (#4A154B) is for dark backgrounds where a light button would be lost.
const themes = {
  light: css`
    background: #ffffff;
    color: #1d1c1d;
    border: 1px solid #dddddd;
  `,
  dark: css`
    background: #4a154b;
    color: #ffffff;
    border: none;
  `,
};

const shapes = {
  square: css`border-radius: 4px;`,
  rounded: css`border-radius: 9999px;`,
};

const labels = {
  signin: 'Sign in with Slack',
  signup: 'Sign up with Slack',
  continue: 'Continue with Slack',
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
  font-family: 'Lato', 'Roboto', Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: filter 0.2s, box-shadow 0.2s;
  ${({ $dark }) => ($dark ? themes.dark : themes.light)};
  ${({ $shape }) => shapes[$shape]};

  &:hover:not(:disabled) {
    filter: brightness(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }

  &&:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }
`;

const SlackButton: React.FC<SlackButtonProps> = ({
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
    <SlackIcon />
    {labels[mode]}
  </Button>
);

export default SlackButton;
