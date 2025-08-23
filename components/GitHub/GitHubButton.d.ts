import { default as React } from '../../../node_modules/react';
export interface GitHubButtonProps {
    mode: 'login' | 'continue';
    dark?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}
declare const GitHubButton: React.FC<GitHubButtonProps>;
export default GitHubButton;
