import React from 'react';
import styled, { css } from 'styled-components';
import BitbucketIcon from './BitbucketIcon';

export interface BitbucketButtonProps {
  mode?: 'signin' | 'signup' | 'continue';
  dark?: boolean;
  shape?: 'square' | 'rounded';
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

// Bitbucket/Atlassian brand: primary is Atlassian Blue (#0052CC) with white text.
// Dark mode: Atlassian's dark UI uses #1e2432 (Atlassian dark navy) background.
const themes = {
  light: css`
    background: #0052cc;
    color: #ffffff;
    border: none;
    svg { fill: #ffffff; }
  `,
  dark: css`
    background: #1e2432;
    color: #4c9aff;
    border: 1px solid #4c9aff;
    svg { fill: #4c9aff; }
  `,
};

const shapes = {
  square: css`border-radius: 4px;`,
  rounded: css`border-radius: 9999px;`,
};

const labels = {
  signin: 'Sign in with Bitbucket',
  signup: 'Sign up with Bitbucket',
  continue: 'Continue with Bitbucket',
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
    box-shadow: 0 2px 4px rgba(0, 82, 204, 0.3);
  }

  &&:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }
`;

const BitbucketButton: React.FC<BitbucketButtonProps> = ({
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
    <BitbucketIcon />
    {labels[mode]}
  </Button>
);

export default BitbucketButton;
