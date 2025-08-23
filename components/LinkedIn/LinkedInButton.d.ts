import { default as React } from '../../../node_modules/react';
export interface LinkedInButtonProps {
    mode: 'login' | 'continue';
    dark?: boolean;
    disabled?: boolean;
    className?: string;
    shape?: 'round' | 'square';
    onClick?: () => void;
}
export declare const LinkedInButton: React.FC<LinkedInButtonProps>;
export default LinkedInButton;
