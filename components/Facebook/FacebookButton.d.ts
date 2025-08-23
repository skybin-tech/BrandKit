import { default as React } from '../../../node_modules/react';
export interface FacebookButtonProps {
    mode: 'login' | 'continue';
    variant: 'filled' | 'outline';
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}
declare const FacebookButton: React.FC<FacebookButtonProps>;
export default FacebookButton;
