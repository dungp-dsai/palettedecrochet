export { colors, type ColorName } from './colors';
export { typography, type TypographyName } from './typography';
export { spacing, borderRadius } from './spacing';

export const theme = {
  colors: require('./colors').colors,
  typography: require('./typography').typography,
  spacing: require('./spacing').spacing,
  borderRadius: require('./spacing').borderRadius,
} as const;
