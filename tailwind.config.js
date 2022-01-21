module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    invert: {
      1: '1',
    },
    // screens: {
    //   xl: '1280px',
    // },
    colors: {
      white: '#fff',
      black: '#000',
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
    },
    fontFamily: {
      amiko: ['Amiko', 'sans-serif'],
      asap: ['Asap', 'sans-serif'],
    },
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
  plugins: [],
};
