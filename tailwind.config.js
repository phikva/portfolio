module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    colors: {
      'black': '#000',
      'white': '#fff',
      "orange": "#ff512a"
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
   fontSize: {
     "5xl" : "2.5rem"
   }
     
    },
  },
  plugins: [],
}