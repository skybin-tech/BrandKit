export type GoogleButtonTheme = 'light' | 'dark' | 'neutral';
export type GoogleButtonShape = 'rounded' | 'square';
export type GoogleButtonVariant = 'SI' | 'SU' | 'ctn'; // Sign In, Sign Up, Continue

export interface GoogleButtonProps {
    theme?: GoogleButtonTheme;
    shape?: GoogleButtonShape;
    variant?: GoogleButtonVariant;
    alt?: string;
    onClick?: () => void;
    height?: number;
}
