// src/components/GitHubSocialBtn/GitHubSocialBtn.tsx
import React from 'react';
import styled from 'styled-components';
import { MarkGithubIcon } from '@primer/octicons-react';

export interface GitHubButtonProps {
    mode: 'login' | 'continue';
    dark?: boolean;   // toggles background only
    onClick: () => void;
    disabled?: boolean;
    className?: string;
}

const themes = {
    light: {
        bg: '#ffffff',
        fg: '#24292f',
        border: '1px solid #d0d7de',
    },
    dark: {
        bg: '#24292f',
        fg: '#ffffff',
        border: 'none',
    },
};

const Button = styled.button<{ $dark: boolean }>`
  width: 240px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: opacity 0.2s;

  background: ${({ $dark }) => ($dark ? themes.dark.bg : themes.light.bg)};
  color: ${({ $dark }) => ($dark ? themes.dark.fg : themes.light.fg)};
  border: ${({ $dark }) => ($dark ? themes.dark.border : themes.light.border)};

  /* Icon color must remain GitHub black or white */
  svg {
    fill: ${({ $dark }) => ($dark ? '#ffffff' : '#24292f')};
  }

  &:hover {
    opacity: 0.9;
  }
`;

const GitHubButton: React.FC<GitHubButtonProps> = ({
    mode,
    dark = false,
    onClick,
    disabled,
    className
}) => (
    <Button onClick={onClick} $dark={dark}
        disabled={disabled}
        className={className}>
        <MarkGithubIcon size={20} />
        {mode === 'login' ? 'Login with GitHub' : 'Continue with GitHub'}
    </Button>
);

export default GitHubButton;