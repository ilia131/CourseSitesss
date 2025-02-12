import { Slider } from 'antd';

/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

const withRTL = require("tailwindcss-rtl");

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important : "#root",

  darkMode :'class',
  theme: {



    extend: {

      colors:{
         'blue1':'#00E2DC'

      },

      fontFamily: {
        'primaryRegular':['BYekan'],
        'primaryMedium':['BYekan-bold'],
           'BYekan1':['BYekan1']
      },
      boxShadow: {'3xxl' : 'inset 4px 4px 6px rgba(0, 0, 0, 0.5)',
                 '3xxxl' : 'inset 0px 4.5px 6px rgba(0, 0, 0, 0.3)',
                 
      },
      backgroundImage: {

  
        'NewsBg': "url('./src/assets/img/News/mainBg.png)",
        'podcast': "url('./src/assets/landingpng/Rectangle-35.png')",
        'footerbg': "url('./src/assets/landingpng/Rectangle-141.png')",
        'category': "url('./src/assets/landingpng/Rectangle-2.png')",
        'sliderbg':"url('./src/assets/landingpng/Rectangle-23.png')",
        'registerbg':"url('./src/assets/Register/bgregister.svg')",
        'custom-gradient': 'linear-gradient(180deg, rgba(0, 252, 246, 0.8) -80.75%, rgba(0, 43, 42, 0.8) 100%)',
        'custom-blur':'backdrop-filter: blur(5px)',
         'bglogin':'url("./src/assets/Login/bgloginbox.svg")',
         'bgloginmain':'url("./src/assets/Login/bglogin.svg")'
      },
      gradientColorStopPositions: {
        33: 'background: linear-gradient(230.15deg, rgba(228, 137, 0, 0.15) 10.81%, rgba(1, 206, 201, 0.225) 86.96%)'
      },
      screens: {
        'sm1':'320px',
        'smx': '350px',
        'smx2':'400px',
        'smx3':'500px',

         'cd':'850px',

        'smx4':'600px',
        'smx5':'1187px',

        'laptop': '1024px',
        'desktop': '1280px',
        'ab':'320px',
        'cd' : '850px',
        'gh' : '950px',
        'ij' : '900px',
        'kl' : '810px',
        'mn' : '710px',
        'op' : '580px',
        'qr' : '525px',
        'st' : '480px',
        'uv' : '435px', 
        'wx' : '385px',
        'ef' : '1150px',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        'sizt': '496px',
      }
  
    },
  },
  plugins: [
    require('daisyui'),

    flowbite.content(),
  ],
}
