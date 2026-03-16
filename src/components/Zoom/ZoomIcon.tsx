import React from 'react';

const ZoomIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zM8.5 8A1.5 1.5 0 0 0 7 9.5v5A1.5 1.5 0 0 0 8.5 16h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 15.5 8h-7zm10.121 1.621L16 11.243v1.514l2.621 1.622A.5.5 0 0 0 19.5 14v-4a.5.5 0 0 0-.879-.379z"/>
  </svg>
);

export default ZoomIcon;
