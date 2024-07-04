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
      'lightTheme-white' : '#FFFFF',
      // 'lightTheme-white' : 'red',

      'lightTheme-white-light' : '#F9F9F9',
      'lightTheme-text': '#2A2A2A',
      'lightTheme-text-light': '#7D7D7D',
      'darkTheme-dark' : '#181818',
      'darkTheme-dark-light' : '#212121',
      'darkTheme-text' : '#ECECEC',
      'darkTheme-text-light' : '#CDCDCD',
      'darkTheme-border': '#494949',
      'green': '#10A37F',
      
      'transparent' : 'transparent',
      'inherit':'inherit'
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