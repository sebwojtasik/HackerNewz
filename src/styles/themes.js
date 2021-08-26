const baseTheme = {
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '0.9em',
    medium: '1em',
    large: '1.25em',
  },
  breakpoint: '1160px',
};

export const lightTheme = {
  ...baseTheme,
  colors: {
    primary: '#FFB300',
    secondary: '#FFCD8B',
    background: '#FDFBF7',
    foreground: '#fff',
    font: '#313131',
    fontLighter: '#5E5E5E',
    loadingBackground: '#f3f3f3',
    loadingForeground: '#ecebeb',
  },
};

export const darkTheme = {
  ...baseTheme,
  colors: {
    primary: '#FFBA5E',
    secondary: '#FFCD8B',
    background: '#333',
    foreground: '#444',
    font: '#fff',
    fontLighter: '#999',
    loadingBackground: '#6e6e6e',
    loadingForeground: '#8a8a8a',
  },
};
