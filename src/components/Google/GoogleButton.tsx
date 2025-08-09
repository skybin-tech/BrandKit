import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import type { GoogleButtonProps } from './GoogleButton.types';
import { googleAssetMap } from './googleAssetMap';

const Button = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;

  img {
    display: block;
    height: 100%;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover img {
    opacity: 0.9;
  }
`;

const GoogleButton: React.FC<GoogleButtonProps> = ({
  theme = 'light',
  shape = 'rounded',
  variant = 'SI',
  alt = 'Sign in with Google',
  height = 48,
  onClick,
}) => {


  const buildKey = (t: string) => `${t}-${shape}-${variant}`;
  const [images, setImages] = useState<{ [resolution: string]: string } | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      const key = `${theme}-${shape}-${variant}`;
      const loadedImages = await googleAssetMap(key);
      setImages(loadedImages);
    };

    loadImages();
  }, [theme, shape, variant]);

  return (
    <Button onClick={onClick} style={{ height }}>
      <img
        src={images?.['1x']}
        srcSet={`
          ${images?.['1x']} 1x,
          ${images?.['2x']} 2x,
          ${images?.['3x']} 3x,
          ${images?.['4x']} 4x
        `}
        alt={alt}
      />
    </Button>
  );
};

export default GoogleButton;