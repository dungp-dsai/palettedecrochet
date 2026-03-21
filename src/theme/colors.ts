export const colors = {
  primary: '#8c4d4e',
  primaryDim: '#7e4142',
  primaryContainer: '#faa9a9',
  primaryFixedDim: '#ea9c9c',
  onPrimary: '#fff7f6',
  onPrimaryContainer: '#60292b',
  onPrimaryFixed: '#461517',
  onPrimaryFixedVariant: '#6b3233',

  secondary: '#705a52',
  secondaryDim: '#634e47',
  secondaryContainer: '#fadcd2',
  secondaryFixedDim: '#ebcec4',
  onSecondary: '#fff7f5',
  onSecondaryContainer: '#624d45',
  onSecondaryFixed: '#4e3b34',
  onSecondaryFixedVariant: '#6c574f',

  tertiary: '#625e5c',
  tertiaryDim: '#555350',
  tertiaryContainer: '#ffffff',
  tertiaryFixedDim: '#f5f0ec',
  onTertiary: '#fef8f4',
  onTertiaryContainer: '#65625f',
  onTertiaryFixed: '#52504d',
  onTertiaryFixedVariant: '#706c69',

  background: '#fbf9f9',
  onBackground: '#313333',

  surface: '#fbf9f9',
  surfaceBright: '#fbf9f9',
  surfaceDim: '#d9dada',
  surfaceContainer: '#eeeeee',
  surfaceContainerHigh: '#e8e8e8',
  surfaceContainerHighest: '#e2e2e3',
  surfaceContainerLow: '#f4f3f3',
  surfaceContainerLowest: '#ffffff',
  surfaceVariant: '#e2e2e3',
  surfaceTint: '#8c4d4e',
  onSurface: '#313333',
  onSurfaceVariant: '#5d5f60',

  outline: '#797b7b',
  outlineVariant: '#b1b2b2',

  error: '#a73b21',
  errorDim: '#791903',
  errorContainer: '#fd795a',
  onError: '#fff7f6',
  onErrorContainer: '#6e1400',

  inversePrimary: '#faa9a9',
  inverseSurface: '#0d0e0f',
  inverseOnSurface: '#9d9d9d',

  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
} as const;

export type ColorName = keyof typeof colors;
