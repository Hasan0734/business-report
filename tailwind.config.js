module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    extend: {
      fontSize: {
        'xs': ['15px', '15px'],
        'sm': ['12px', '12px'],
        'base-2': ['18px', '18px'],
        'lg': ['15px', '15px'],
        'xl': ['20px'],
        '2xl': ['25px', '30px'],
        '4xl': ['35px', '42px'],
        '5xl': ['44px', '44px'],
      },
      screens: {
        md: '860px',
        lg: '1170px',
        xl: '1280px',
        '2xl': '1280px',
      },
      spacing: {
        800: '800px',
        22: '90px',
      },
    },
    container: {
      center: true,
    },
    invert: {
      1: '1',
    },
    colors: {
      blue: '#1e85eb',
      orange: '#ad824a',
      transparent: 'transparent',
      white: '#fff',
      black: '#000',
      red: '#ff0000',
      procelain: '#f2f2f2',
      aqua: '#008081',
      liver: '#4e4e4e',
      space: '#2d3940',
      iridum: '#3e3e3e',
      yellow: '#FFD001',
      mirage: '#0E132D',
      inp: '#DCDCDC',
      'white-smoke': '#F5F5F5',
      dune: '#333333',
      'iron-gray': '#666666',
      'gray-dark': '#222838',
      gray: '#bbb',
      'gray-light': '#888888',
      iron: '#d8d8d8',
      cross: 'rgba( 49, 91, 124, 1.00 )',
    },
    // screens: {
    //   xl: '1280px',
    // },


    boxShadow: {
      sm: '0px 2px 18px 0px rgb(0 0 0 / 30%)',
      xm: '0px 2px 18px 0px rgb(0 0 0 / 8%)',
    },
    // extend: {
    //   spacing: {
    //     128: '32rem',
    //     144: '36rem',
    //   },
    //   borderRadius: {
    //     '4xl': '2rem',
    //   },
    // },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
