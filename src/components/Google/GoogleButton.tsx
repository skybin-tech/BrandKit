// src/components/GoogleButton/GoogleButton.tsx
import React from 'react';
import styled, { css } from 'styled-components';
import useLink from '@/hooks/useLink';
import type {
  GoogleButtonTheme,
  GoogleButtonShape,
  GoogleButtonVariant,
} from './GoogleButton.types';

/* ---------- Props ---------- */
interface GoogleButtonProps {
  theme?: GoogleButtonTheme;
  shape?: GoogleButtonShape;
  variant: GoogleButtonVariant;
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

/* ---------- Official SVG ---------- */
const GoogleG = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z"
      fill="#4285F4"
    />
    <path
      d="M9 18c2.43 0 4.467-.806 5.956-2.184L12.048 13.56c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.952v2.332C2.438 16.983 5.482 18 9 18z"
      fill="#34A853"
    />
    <path
      d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.952C.347 6.173 0 7.548 0 9s.348 2.827.952 4.042l3.012-2.332z"
      fill="#FBBC05"
    />
    <path
      d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 1.017.952 3.42L3.964 5.752C4.672 3.625 6.656 2.001 9 2.001z"
      fill="#EA4335"
    />
  </svg>
);

/* ---------- Style map ---------- */
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

const texts: Record<GoogleButtonVariant, string> = {
  SI: 'Sign in with Google',
  SU: 'Sign up with Google',
  ctn: 'Continue with Google'
};

/* ---------- Styled Button ---------- */
const Button = styled.button<{
  $theme: GoogleButtonTheme;
  $shape: GoogleButtonShape;
  $width?: string | number;
  $height?: string | number;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${({ $width }) => $width ?? 'auto'};
  height: ${({ $height }) => $height ?? '40px'};
  padding: 0 12px;
  font-family: 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  ${({ $theme }) => themes[$theme]};
  ${({ $shape }) => shapes[$shape]};

  &:hover:not(:disabled) {
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
                0 1px 3px 1px rgba(60, 64, 67, 0.15);
  }

  &:active:not(:disabled) {
    box-shadow: 0 1px 3px 0 rgba(60, 64, 67, 0.3),
                0 4px 8px 3px rgba(60, 64, 67, 0.15);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }
`;

/* ---------- Component ---------- */
const GoogleButton: React.FC<GoogleButtonProps> = ({
  theme = 'light',
  shape = 'square',
  variant,
  width,
  height,
  onClick,
  disabled,
  className,
}) => {
  useLink(
    'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap'
  );

  return (
    <Button
      type="button"
      $theme={theme}
      $shape={shape}
      $width={width}
      $height={height}
      onClick={onClick}
      disabled={disabled}
      className={className}
      aria-label={texts[variant]}
    >
      <GoogleG />
      {texts[variant]}
    </Button>
  );
};

export default GoogleButton;