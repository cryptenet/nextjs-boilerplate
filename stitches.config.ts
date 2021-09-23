import { createStitches, defaultThemeMap, CSS } from '@stitches/react';

export type { VariantProps } from '@stitches/react';

export const stitches = createStitches({
  prefix: '',
  theme: {},
  themeMap: { ...defaultThemeMap },
  utils: {},
});

export type StitchesCss = CSS<typeof stitches>;

export const { css, styled, globalCss, createTheme, keyframes, getCssText } = stitches;
