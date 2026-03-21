import { Platform, TextStyle } from 'react-native';

const headlineFamily = Platform.select({
  web: 'Noto Serif, Georgia, serif',
  default: 'System',
});

const bodyFamily = Platform.select({
  web: 'Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, sans-serif',
  default: 'System',
});

export const typography = {
  displayLarge: {
    fontFamily: headlineFamily,
    fontSize: 56,
    fontWeight: '400',
    lineHeight: 64,
  } as TextStyle,

  displayMedium: {
    fontFamily: headlineFamily,
    fontSize: 45,
    fontWeight: '400',
    lineHeight: 52,
  } as TextStyle,

  headlineLarge: {
    fontFamily: headlineFamily,
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 40,
  } as TextStyle,

  headlineMedium: {
    fontFamily: headlineFamily,
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 36,
  } as TextStyle,

  headlineSmall: {
    fontFamily: headlineFamily,
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 32,
  } as TextStyle,

  titleLarge: {
    fontFamily: bodyFamily,
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 28,
  } as TextStyle,

  titleMedium: {
    fontFamily: bodyFamily,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  } as TextStyle,

  bodyLarge: {
    fontFamily: bodyFamily,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  } as TextStyle,

  bodyMedium: {
    fontFamily: bodyFamily,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  } as TextStyle,

  labelLarge: {
    fontFamily: bodyFamily,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  } as TextStyle,

  labelMedium: {
    fontFamily: bodyFamily,
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.5,
  } as TextStyle,

  labelSmall: {
    fontFamily: bodyFamily,
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.5,
  } as TextStyle,
} as const;

export type TypographyName = keyof typeof typography;
