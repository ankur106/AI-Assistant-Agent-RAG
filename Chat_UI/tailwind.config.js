/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white' : '#ECECEC',
      'dark' : '#181818',
      'dark-light' : '#212121',
      'green': '#10A37F',
      'white-off' : '#CDCDCD',
      'bdr-color': '#494949',
      'transparent' : 'transparent'
    },
    
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['ui-sans-serif','-apple-system','system-ui','Segoe UI','Roboto','Ubuntu','Cantarell','Noto Sans','sans-serif','Helvetica','Apple Color Emoji','Arial','Segoe UI Emoji','Segoe UI Symbol'],
        // serif: ['Merriweather', 'serif'],
      },
    }
  },
  plugins: [],
}