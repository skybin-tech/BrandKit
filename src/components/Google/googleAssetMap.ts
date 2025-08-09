// googleAssetMap.ts

export const googleAssetMap = async (key: string) => {
    const images: { [resolution: string]: string } = {};

    // Light Theme
    if (key === 'light-rounded-SI') {
        images['1x'] = (await import('@/assets/google/web_light_rd_SI@1x.png')).default;
        images['2x'] = (await import('@/assets/google/web_light_rd_SI@2x.png')).default;
        images['3x'] = (await import('@/assets/google/web_light_rd_SI@3x.png')).default;
        images['4x'] = (await import('@/assets/google/web_light_rd_SI@4x.png')).default;
    } else if (key === 'light-rounded-SU') {
        images['1x'] = (await import('@/assets/google/web_light_rd_SU@1x.png')).default;
        images['2x'] = (await import('@/assets/google/web_light_rd_SU@2x.png')).default;
        images['3x'] = (await import('@/assets/google/web_light_rd_SU@3x.png')).default;
        images['4x'] = (await import('@/assets/google/web_light_rd_SU@4x.png')).default;
    } else if (key === 'light-rounded-ctn') {
        images['1x'] = (await import('@/assets/google/web_light_rd_ctn@1x.png')).default;
        images['2x'] = (await import('@/assets/google/web_light_rd_ctn@2x.png')).default;
        images['3x'] = (await import('@/assets/google/web_light_rd_ctn@3x.png')).default;
        images['4x'] = (await import('@/assets/google/web_light_rd_ctn@4x.png')).default;
    } else if (key === 'light-square-SI') {
        images['1x'] = (await import('@/assets/google/web_light_sq_SI@1x.png')).default;
        images['2x'] = (await import('@/assets/google/web_light_sq_SI@2x.png')).default;
        images['3x'] = (await import('@/assets/google/web_light_sq_SI@3x.png')).default;
        images['4x'] = (await import('@/assets/google/web_light_sq_SI@4x.png')).default;
    } else if (key === 'light-square-SU') {
        images['1x'] = (await import('@/assets/google/web_light_sq_SU@1x.png')).default;
        images['2x'] = (await import('@/assets/google/web_light_sq_SU@2x.png')).default;
        images['3x'] = (await import('@/assets/google/web_light_sq_SU@3x.png')).default;
        images['4x'] = (await import('@/assets/google/web_light_sq_SU@4x.png')).default;
    } else if (key === 'light-square-ctn') {
        images['1x'] = (await import('@/assets/google/web_light_sq_ctn@1x.png')).default;
        images['2x'] = (await import('@/assets/google/web_light_sq_ctn@2x.png')).default;
        images['3x'] = (await import('@/assets/google/web_light_sq_ctn@3x.png')).default;
        images['4x'] = (await import('@/assets/google/web_light_sq_ctn@4x.png')).default;
    }

    // Dark Theme
    if (key === 'dark-rounded-SI') {
        images['1x'] = (await import('@/assets/google/web_dark_rd_SI@1x.png')).default;
        images['2x'] = (await import('@/assets/google/web_dark_rd_SI@2x.png')).default;
        images['3x'] = (await import('@/assets/google/web_dark_rd_SI@3x.png')).default;
        images['4x'] = (await import('@/assets/google/web_dark_rd_SI@4x.png')).default;
    } else if (key === 'dark-rounded-SU') {
        images['1x'] = (await import('@/assets/google/web_dark_rd_SU@1x.png')).default;
        images['2x'] = (await import('@/assets/google/web_dark_rd_SU@2x.png')).default;
        images['3x'] = (await import('@/assets/google/web_dark_rd_SU@3x.png')).default;
        images['4x'] = (await import('@/assets/google/web_dark_rd_SU@4x.png')).default;
    } else if (key === 'dark-rounded-ctn') {
        images['1x'] = (await import('@/assets/google/web_dark_rd_ctn@1x.png')).default;
        images['2x'] = (await import('@/assets/google/web_dark_rd_ctn@2x.png')).default;
        images['3x'] = (await import('@/assets/google/web_dark_rd_ctn@3x.png')).default;
        images['4x'] = (await import('@/assets/google/web_dark_rd_ctn@4x.png')).default;
    } else if (key === 'dark-square-SI') {
        images['1x'] = (await import('@/assets/google/web_dark_sq_SI@1x.png')).default;
        images['2x'] = (await import('@/assets/google/web_dark_sq_SI@2x.png')).default;
        images['3x'] = (await import('@/assets/google/web_dark_sq_SI@3x.png')).default;
        images['4x'] = (await import('@/assets/google/web_dark_sq_SI@4x.png')).default;
    } else if (key === 'dark-square-SU') {
        images['1x'] = (await import('@/assets/google/web_dark_sq_SU@1x.png')).default;
        images['2x'] = (await import('@/assets/google/web_dark_sq_SU@2x.png')).default;
        images['3x'] = (await import('@/assets/google/web_dark_sq_SU@3x.png')).default;
        images['4x'] = (await import('@/assets/google/web_dark_sq_SU@4x.png')).default;
    } else if (key === 'dark-square-ctn') {
        images['1x'] = (await import('@/assets/google/web_dark_sq_ctn@1x.png')).default;
        images['2x'] = (await import('@/assets/google/web_dark_sq_ctn@2x.png')).default;
        images['3x'] = (await import('@/assets/google/web_dark_sq_ctn@3x.png')).default;
        images['4x'] = (await import('@/assets/google/web_dark_sq_ctn@4x.png')).default;
    }

    // Neutral Theme
    if (key === 'neutral-rounded-SI') {
        images['1x'] = (await import('@/assets/google/web_neutral_rd_SI@1x.png')).default;
        images['2x'] = (await import('@/assets/google/web_neutral_rd_SI@2x.png')).default;
        images['3x'] = (await import('@/assets/google/web_neutral_rd_SI@3x.png')).default;
        images['4x'] = (await import('@/assets/google/web_neutral_rd_SI@4x.png')).default;
    } else if (key === 'neutral-rounded-SU') {
        images['1x'] = (await import('@/assets/google/web_neutral_rd_SU@1x.png')).default;
        images['2x'] = (await import('@/assets/google/web_neutral_rd_SU@2x.png')).default;
        images['3x'] = (await import('@/assets/google/web_neutral_rd_SU@3x.png')).default;
        images['4x'] = (await import('@/assets/google/web_neutral_rd_SU@4x.png')).default;
    } else if (key === 'neutral-rounded-ctn') {
        images['1x'] = (await import('@/assets/google/web_neutral_rd_ctn@1x.png')).default;
        images['2x'] = (await import('@/assets/google/web_neutral_rd_ctn@2x.png')).default;
        images['3x'] = (await import('@/assets/google/web_neutral_rd_ctn@3x.png')).default;
        images['4x'] = (await import('@/assets/google/web_neutral_rd_ctn@4x.png')).default;
    } else if (key === 'neutral-square-SI') {
        images['1x'] = (await import('@/assets/google/web_neutral_sq_SI@1x.png')).default;
        images['2x'] = (await import('@/assets/google/web_neutral_sq_SI@2x.png')).default;
        images['3x'] = (await import('@/assets/google/web_neutral_sq_SI@3x.png')).default;
        images['4x'] = (await import('@/assets/google/web_neutral_sq_SI@4x.png')).default;
    } else if (key === 'neutral-square-SU') {
        images['1x'] = (await import('@/assets/google/web_neutral_sq_SU@1x.png')).default;
        images['2x'] = (await import('@/assets/google/web_neutral_sq_SU@2x.png')).default;
        images['3x'] = (await import('@/assets/google/web_neutral_sq_SU@3x.png')).default;
        images['4x'] = (await import('@/assets/google/web_neutral_sq_SU@4x.png')).default;
    } else if (key === 'neutral-square-ctn') {
        images['1x'] = (await import('@/assets/google/web_neutral_sq_ctn@1x.png')).default;
        images['2x'] = (await import('@/assets/google/web_neutral_sq_ctn@2x.png')).default;
        images['3x'] = (await import('@/assets/google/web_neutral_sq_ctn@3x.png')).default;
        images['4x'] = (await import('@/assets/google/web_neutral_sq_ctn@4x.png')).default;
    }

    return images;
};
