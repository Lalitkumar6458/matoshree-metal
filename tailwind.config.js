/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      colors:{
        "mainRed":"#EB1D36",
       ' darkRed':"#981815",
       "dark-cl":"#252531",
       
       },
       fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Oswald':[ 'Oswald','sans-serif'],
        'Roboto':['Roboto',' sans-serif'],
        'exo':['Exo 2', 'sans-serif'],
        'heading':['Aclonica', 'sans-serif']
      },
      backgroundImage:{
        "footerBg":"linear-gradient(90deg, rgba(33,32,43,1) 16%, rgba(45,45,61,1) 68%, rgba(37,37,49,1) 92%)",
        "hoverImg":"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(37,37,49,1) 0%, rgba(87,35,50,0.7987570028011204) 45%, rgba(122,34,51,0.8911939775910365) 71%, rgba(182,20,39,0.9752275910364145) 100%)"
      },
      boxShadow:{
        mainShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"
      }
    },
  },
  
  plugins: [
   
]
}
