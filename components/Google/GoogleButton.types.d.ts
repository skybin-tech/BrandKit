export type GoogleButtonTheme = 'light' | 'dark';
export type GoogleButtonShape = 'rounded' | 'square';
export type GoogleButtonVariant = 'SI' | 'SU' | 'ctn' | 'na';
export interface GoogleButtonProps {
    theme?: GoogleButtonTheme;
    shape?: GoogleButtonShape;
    variant?: GoogleButtonVariant;
    alt?: string;
    onClick?: () => void;
    height?: number;
    disabled?: boolean;
    className?: string;
}
