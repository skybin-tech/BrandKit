import React from 'react';
import styled, { css } from 'styled-components';
import useLink from '@/hooks/useLink';
import type { GoogleButtonMode, GoogleButtonShape } from './GoogleButton.types';
import GoogleIcon from './GoogleIcon';

interface GoogleButtonProps {
  mode?: GoogleButtonMode;
  dark?: boolean;
  shape?: GoogleButtonShape;
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const themes = {
  light: css`
    color: #1f1f1f;
    background: #ffffff;
    border: 1px solid #dadce0;
  `,
  dark: css`
    color: #e8eaed;
    background: #131314;
    border: 1px solid #8e8e93;
  `,
};

const shapes = {
  square: css`border-radius: 4px;`,
  rounded: css`border-radius: 9999px;`,
};

const labels: Record<GoogleButtonMode, string> = {
  signin: 'Sign in with Google',
  signup: 'Sign up with Google',
  continue: 'Continue with Google',
};

const Button = styled.button<{
  $dark: boolean;
  $shape: GoogleButtonShape;
  $width?: string | number;
  $height?: string | number;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${({ $width }) => (typeof $width === 'number' ? `${$width}px` : $width ?? 'auto')};
  height: ${({ $height }) => (typeof $height === 'number' ? `${$height}px` : $height ?? '40px')};
  padding: 0 12px;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  ${({ $dark }) => ($dark ? themes.dark : themes.light)};
  ${({ $shape }) => shapes[$shape]};

  &:hover:not(:disabled) {
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
                0 1px 3px 1px rgba(60, 64, 67, 0.15);
  }

  &:active:not(:disabled) {
    box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.3),
                0 4px 8px 3px rgba(60, 64, 67, 0.15);
  }

  &&:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }
`;

const GoogleButton: React.FC<GoogleButtonProps> = ({
  mode = 'signin',
  dark = false,
  shape = 'square',
  width,
  height,
  onClick,
  disabled,
  className,
}) => {
  useLink('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  return (
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
      <GoogleIcon />
      {labels[mode]}
    </Button>
  );
};

export default GoogleButton;
