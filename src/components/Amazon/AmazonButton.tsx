import React from 'react';
import styled, { css } from 'styled-components';
import AmazonIcon from './AmazonIcon';

export interface AmazonButtonProps {
  mode?: 'signin' | 'signup' | 'continue';
  dark?: boolean;
  shape?: 'square' | 'rounded';
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

// Amazon brand: white button is the standard "Sign in with Amazon" button.
// Dark: Amazon's dark navy (#131921) with orange (#FF9900) accent — matches their dark UI.
const themes = {
  light: css`
    background: #ffffff;
    color: #0f1111;
    border: 1px solid #bbb9b9;
  `,
  dark: css`
    background: #131921;
    color: #ff9900;
    border: 1px solid #3a4553;
  `,
};

const shapes = {
  square: css`border-radius: 4px;`,
  rounded: css`border-radius: 9999px;`,
};

const labels = {
  signin: 'Sign in with Amazon',
  signup: 'Sign up with Amazon',
  continue: 'Continue with Amazon',
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
  font-family: 'Amazon Ember', 'Roboto', Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
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

const AmazonButton: React.FC<AmazonButtonProps> = ({
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
    <AmazonIcon />
    {labels[mode]}
  </Button>
);

export default AmazonButton;
