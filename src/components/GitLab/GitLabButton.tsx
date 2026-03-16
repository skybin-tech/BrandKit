import React from 'react';
import styled, { css } from 'styled-components';
import GitLabIcon from './GitLabIcon';

export interface GitLabButtonProps {
  mode?: 'signin' | 'signup' | 'continue';
  dark?: boolean;
  shape?: 'square' | 'rounded';
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

// GitLab brand: primary is Tangerine (#FC6D26) with white text on light backgrounds.
// Dark mode: GitLab's dark UI uses #1f1f1f background with Tangerine text/border.
const themes = {
  light: css`
    background: #fc6d26;
    color: #ffffff;
    border: none;
    svg { fill: #ffffff; }
  `,
  dark: css`
    background: #1f1f1f;
    color: #fc6d26;
    border: 1px solid #fc6d26;
    svg { fill: #fc6d26; }
  `,
};

const shapes = {
  square: css`border-radius: 4px;`,
  rounded: css`border-radius: 9999px;`,
};

const labels = {
  signin: 'Sign in with GitLab',
  signup: 'Sign up with GitLab',
  continue: 'Continue with GitLab',
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
    box-shadow: 0 2px 4px rgba(252, 109, 38, 0.3);
  }

  &&:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }
`;

const GitLabButton: React.FC<GitLabButtonProps> = ({
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
    <GitLabIcon />
    {labels[mode]}
  </Button>
);

export default GitLabButton;
