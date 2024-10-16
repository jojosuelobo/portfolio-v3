import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'
  ],
  darkMode: "class",
  theme: {
    extend: {
     
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "linear-red": 'linear-gradient(90deg, #ff3131, #ff6e6e);',
        "linear-gray": "linear-gradient(180deg,#121212,#1a1a1a, #121212)",
        "linear-gray-2": "linear-gradient(0deg,#121212,#262626)",
        "linear-gray-3": "linear-gradient(180deg, rgba(18, 18, 18, 0) 1%, #121212 37%)",
        "linear-light": "linear-gradient(180deg, hsla(0, 0%, 100%, 0%) 54%, #fff 80%)",
        'linear-button-light': "linear-gradient(90deg, #ff3131, #ff6e6e)",
        "linear-footer": "linear-gradient(180deg, #ffffff, #c5d9f9)"
    },
      colors: {
        blue: {
          dark: {
            '100': '#41bbff', 
            '300': '#374151', 
            '200': '#1f2937',
          },
          light: {
            '100': '#5b6e80', 
            '500': '#4b5563',
            '200': '#0062ff', 
            '400': '#00083d', 
          } 
        },
        gray:{
          dark: {
            '500': '#121212', 
            '450': '#d1d5db', 
            '400': '#ffffffde',
            '300': '#ffffff99', 
            '200': '#ffffff1c',
            '100': '#ffffff12', 
          },
          light: {
            '100': '#ffffffe6', 
            '200': '#20131321', 
          }
        },
        red:{
          light: {
            '100': '#ff3131',
            '500': '#ff3131',
            '200': '#ff3131', 
            '400': '#ff3131', 
          }
        },
      },
      boxShadow: {
        'brand-shadow': '0px 0px 150px -60px'

      },
      gridTemplateRows: {
        layout: '70px 1fr auto'
      },
      gridTemplateColumns:{
        projects: 'repeat(auto-fit, minmax(340px, 1fr))',
        skills: 'repeat(auto-fit, minmax(135px, 1fr))',
        allprojects: 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      keyframes: {
        
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        arrowRight: {
          from: { opacity: '0', transform: 'translateX(-40px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        contentShow: {
          from: { opacity: '0', transform: 'translateX(150%)' },
          to: { opacity: '1', transform: 'translateX(0%) scale(1)' },
        },
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateX(100px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 350ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        arrowRight: ' arrowRight 2.5s infinite cubic-bezier(0.16, 1, 0.3, 1)'
      },
      minHeight: {
        'homescreen': 'calc((100vh - 128px))'
      },
      
    },
  
  },
  plugins: [nextui()],
};

export default config;
