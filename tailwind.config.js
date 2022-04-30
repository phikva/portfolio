module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'black': '#0000',
      'white': '#ffff',
    },
    screens: {
      xs: '370px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        'Roc': ['roc-grotesk', 'sans-serif'],
        'Roc-wide': ['roc-grotesk-wide', 'sans-serif']  
      },
    },
  },
  plugins: [],
}