module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: '#4A43C8',
        'primary-accent': '#3832B0',
        danger: '#E04C30',
        'danger-accent': '#B53C26',
        dark: '#2A313B',
        display: '#2E3841',
      },
      width: {
        390: '390px',
      },
      fontSize: {
        28: '1.75rem',
      },
      padding: {
        'vert': '1.25rem',
        'horiz': '1.1875rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
