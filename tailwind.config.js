module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Neue': ['aktiv-grotesk', 'helvetica'],
      'Neue-bold': ['aktiv-grotesk', 'helvetica']  
    },
    colors: {
      'black': '#121111',
      'white': '#fff',
      "green": "#e7fa90",
      "orange": "#fa9f90"
    },
    screens: {
      xs: '370px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
    
   fontSize: {
     "5xl" : "2.5rem",
     "10xl" : "14rem"
   }
     
    },
  },
  plugins: [],
}