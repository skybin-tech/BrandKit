// src/components/GoogleButton/GoogleButton.tsx
import React from 'react';
import styled from 'styled-components';
import { svgMap } from './googleAssets';
import type {
  GoogleButtonTheme,
  GoogleButtonShape,
  GoogleButtonVariant,
  GoogleButtonProps,
} from './GoogleButton.types';

/* ---------- props ---------- */


/* ---------- helpers ---------- */
const variantAlt = (v: GoogleButtonVariant): string => {
  switch (v) {
    case 'SI': return 'Sign in with Google';
    case 'SU': return 'Sign up with Google';
    case 'ctn':
    case 'na': return 'Continue with Google';
    default: return 'Google';
  }
};

const px = (n?: number) => (typeof n === 'number' ? `${n}px` : '48px');

/* ---------- styles ---------- */
const Button = styled.button`
  border: 0;
  background: transparent;
  padding: 0;
  line-height: 0;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  img {
    display: block;
    height: 100%;
    width: auto;
    transition: opacity 0.2s ease-in-out, transform 0.06s ease-in-out;
  }

  &:hover img {
    opacity: 0.92;
  }
  &:active img {
    transform: translateY(0.5px);
  }
`;

/* ---------- component ---------- */
const GoogleButton: React.FC<GoogleButtonProps> = ({
  theme = 'light',
  shape = 'rounded',
  variant = 'SI',
  alt,
  onClick,
  height = 48,
  disabled,
  className,
}) => {
  const src = svgMap[theme][shape][variant];

  return (
    <Button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={{ height: px(height) }}
      aria-label={alt ?? variantAlt(variant)}
    >
      <img src={src} alt={alt ?? variantAlt(variant)} />
    </Button>
  );
};

export default GoogleButton;