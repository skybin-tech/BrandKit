import React from 'react';
import styled, { css } from 'styled-components';
import ZoomIcon from './ZoomIcon';

export interface ZoomButtonProps {
  mode?: 'signin' | 'signup' | 'continue';
  dark?: boolean;
  shape?: 'square' | 'rounded';
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

// Zoom brand: primary is Zoom Blue (#2D8CFF) with white text on light backgrounds.
// Dark mode: Zoom's dark UI uses #1c1c1c background with Zoom Blue text/border.
const themes = {
  light: css`
    background: #2d8cff;
    color: #ffffff;
    border: none;
    svg { fill: #ffffff; }
  `,
  dark: css`
    background: #1c1c1c;
    color: #2d8cff;
    border: 1px solid #2d8cff;
    svg { fill: #2d8cff; }
  `,
};

const shapes = {
  square: css`border-radius: 4px;`,
  rounded: css`border-radius: 9999px;`,
};

const labels = {
  signin: 'Sign in with Zoom',
  signup: 'Sign up with Zoom',
  continue: 'Continue with Zoom',
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
    box-shadow: 0 2px 4px rgba(45, 140, 255, 0.3);
  }

  &&:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }
`;

const ZoomButton: React.FC<ZoomButtonProps> = ({
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
    <ZoomIcon />
    {labels[mode]}
  </Button>
);

export default ZoomButton;
