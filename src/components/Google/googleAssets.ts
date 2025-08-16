// src/components/GoogleButton/googleAssets.ts
// ---- Eager imports (24 files) ----
// light / rounded
import lightRdSI from '@/assets/google/web_light_rd_SI.svg';
import lightRdSU from '@/assets/google/web_light_rd_SU.svg';
import lightRdCtn from '@/assets/google/web_light_rd_ctn.svg';
import lightRdNa from '@/assets/google/web_light_rd_na.svg';
// light / square
import lightSqSI from '@/assets/google/web_light_sq_SI.svg';
import lightSqSU from '@/assets/google/web_light_sq_SU.svg';
import lightSqCtn from '@/assets/google/web_light_sq_ctn.svg';
import lightSqNa from '@/assets/google/web_light_sq_na.svg';

// dark / rounded
import darkRdSI from '@/assets/google/web_dark_rd_SI.svg';
import darkRdSU from '@/assets/google/web_dark_rd_SU.svg';
import darkRdCtn from '@/assets/google/web_dark_rd_ctn.svg';
import darkRdNa from '@/assets/google/web_dark_rd_na.svg';
// dark / square
import darkSqSI from '@/assets/google/web_dark_sq_SI.svg';
import darkSqSU from '@/assets/google/web_dark_sq_SU.svg';
import darkSqCtn from '@/assets/google/web_dark_sq_ctn.svg';
import darkSqNa from '@/assets/google/web_dark_sq_na.svg';

// neutral / rounded
import neutralRdSI from '@/assets/google/web_neutral_rd_SI.svg';
import neutralRdSU from '@/assets/google/web_neutral_rd_SU.svg';
import neutralRdCtn from '@/assets/google/web_neutral_rd_ctn.svg';
import neutralRdNa from '@/assets/google/web_neutral_rd_na.svg';
// neutral / square
import neutralSqSI from '@/assets/google/web_neutral_sq_SI.svg';
import neutralSqSU from '@/assets/google/web_neutral_sq_SU.svg';
import neutralSqCtn from '@/assets/google/web_neutral_sq_ctn.svg';
import neutralSqNa from '@/assets/google/web_neutral_sq_na.svg';
import type { GoogleButtonTheme, GoogleButtonShape, GoogleButtonVariant } from './GoogleButton.types';

// ---- Map (fully typed) ----
export const svgMap = {
    light: {
        rounded: { SI: lightRdSI, SU: lightRdSU, ctn: lightRdCtn, na: lightRdNa },
        square: { SI: lightSqSI, SU: lightSqSU, ctn: lightSqCtn, na: lightSqNa },
    },
    dark: {
        rounded: { SI: darkRdSI, SU: darkRdSU, ctn: darkRdCtn, na: darkRdNa },
        square: { SI: darkSqSI, SU: darkSqSU, ctn: darkSqCtn, na: darkSqNa },
    },
    neutral: {
        rounded: { SI: neutralRdSI, SU: neutralRdSU, ctn: neutralRdCtn, na: neutralRdNa },
        square: { SI: neutralSqSI, SU: neutralSqSU, ctn: neutralSqCtn, na: neutralSqNa },
    },
} satisfies Record<
    GoogleButtonTheme,
    Record<GoogleButtonShape, Record<GoogleButtonVariant, string>>
>;

// Optional: fallback if you ever index with a wrong combo
export const GOOGLE_FALLBACK = lightRdSI;
