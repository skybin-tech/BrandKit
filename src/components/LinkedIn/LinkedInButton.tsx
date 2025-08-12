// src/components/LinkedInLoginBtn/LinkedInLoginBtn.tsx
import React from 'react';
import styled, { css } from 'styled-components';
import { SiLinkedin } from 'react-icons/si';

export interface LinkedInButtonProps {
    mode: 'login' | 'continue';
    dark?: boolean;
    disabled?: boolean;
    className?: string;
    shape?: 'round' | 'square';
    onClick?: () => void;
}

const themes = {
    light: {
        bg: '#ffffff',
        color: '#0A66C2',
        border: '1px solid #0A66C2',
    },
    dark: {
        bg: '#0A66C2',
        color: '#ffffff',
        border: 'none',
    },
};

const Button = styled.button<{
    $dark: boolean;
    $shape: 'round' | 'square';
    disabled?: boolean;
}>`
  width: 240px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  background: ${({ $dark }) => ($dark ? themes.dark.bg : themes.light.bg)};
  color: ${({ $dark }) => ($dark ? themes.dark.color : themes.light.color)};
  border: ${({ $dark }) => ($dark ? themes.dark.border : themes.light.border)};
  border-radius: ${({ $shape }) => ($shape === 'round' ? '24px' : '6px')};

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ className }) => className}
`;

export const LinkedInButton: React.FC<LinkedInButtonProps> = ({
    mode,
    dark = false,
    disabled = false,
    className,
    shape = 'round',
    onClick,
}) => (
    <Button
        onClick={onClick}
        disabled={disabled}
        $dark={dark}
        $shape={shape}
        className={className}
    >
        <SiLinkedin size={20} />
        {mode === 'login' ? 'Login with LinkedIn' : 'Continue with LinkedIn'}
    </Button>
);

export default LinkedInButton;