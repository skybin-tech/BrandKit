// src/components/FacebookLoginBtn/FacebookLoginBtn.tsx
import React from 'react';
import styled, { css } from 'styled-components';
import facebookIconWhite from '@/assets/facebook/Secondary.png';
import facebookIconBlue from '@/assets/facebook/Primary.png';
import useLink from '@/hooks/useLink';

export interface FacebookButtonProps {
  mode: 'login' | 'continue';
  variant: 'filled' | 'outline';
  onClick: () => void;
}

const styles = {
  filled: css`
    background: #1877f2;
    color: #ffffff;
    border: none;
  `,
  outline: css`
    background: #ffffff;
    color: #1877f2;
    border: 2px solid #1877f2;
  `,
};

const Button = styled.button<{ $variant: 'filled' | 'outline' }>`
  width: 240px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.2s;
  ${({ $variant }) => styles[$variant]};

  &:hover {
    opacity: 0.9;
  }
`;

const FacebookButton: React.FC<FacebookButtonProps> = ({
  mode,
  variant,
  onClick,
}) => {
  useLink("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
  return (
    <Button onClick={onClick} $variant={variant}>
      <img
        src={variant === 'filled' ? facebookIconWhite : facebookIconBlue}
        alt="Facebook"
        width={20}
        height={20}
      />
      {mode === 'login' ? 'Login with Facebook' : 'Continue with Facebook'}
    </Button>
  )
};

export default FacebookButton;