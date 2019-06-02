const COLORS = {
  OFF: '#111',
  WHITE: '#f0f0f0',

  DARKRED: '#5A354B',
  RED: '#f971c3',
  BRIGHTRED: '#ffd3ee',

  DARKBLUE: '#2B4D4C',
  BLUE: '#6ff9ea',
  BRIGHTBLUE: '#d7fdf9',

  YELLOW: '#fff568',

  UI_ACCENT: '#08bfa2',
  UI_ACCENT2: '#f01978'
};

COLORS.schemes = {
  default: {
    off: '#111',
    primary: COLORS.RED,
    primarybright: COLORS.BRIGHTRED,
    secondary: COLORS.BLUE,
    secondarybright: COLORS.BRIGHTBLUE,
    tertiary: COLORS.YELLOW
  },

  blue: {
    off: '#111',
    primary: '#0B4BB3',
    primarybright: '#4A90FF',
    secondary: '#FFD840',
    secondarybright: '#FF882B',
    tertiary: '#ADCC54',
  },

  purple: {
    off: '#111',
    primary: '#6A39B3',
    primarybright: '#B685FF',
    secondary: '#FAF239',
    secondarybright: '#FFFC9E',
    tertiary: '#50FFF2'
  },

  green: {
    off: '#111',
    primary: '#779E37',
    primarybright: '#C0FF59',
    secondary: '#6A39B3',
    secondarybright: '#B685FF',
    tertiary: '#FF844A'
  },

  yellow: {
    off: '#111',
    primary: '#C2C04C',
    primarybright: '#FAF761',
    secondary: '#E03A3E',
    secondarybright: '#FA7578',
    tertiary: '#278ECC',
  },

  red: {
    off: '#111',
    primary: '#E03A3E',
    primarybright: '#FA7578',
    secondary: '#DADADA',
    secondarybright: '#EFEFEF',
    tertiary: '#666',
  },

  black: {
    off: '#111',
    primary: '#555',
    primarybright: '#808080',
    secondary: '#FFF',
    secondarybright: '#FFF',
    tertiary: '#B8B8B8',
  }
}

COLORS.options = Object.keys(COLORS.schemes);

if (typeof localStorage === 'undefined') {
  COLORS.initial = 'default';
} else {
  COLORS.initial = COLORS.schemes[localStorage.getItem('colorScheme') || 'default'];
}

module.exports = COLORS;
