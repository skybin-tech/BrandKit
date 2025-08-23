import { default as React } from '../../../node_modules/react';
import { GoogleButtonTheme, GoogleButtonShape, GoogleButtonVariant } from './GoogleButton.types';
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
declare const GoogleButton: React.FC<GoogleButtonProps>;
export default GoogleButton;
