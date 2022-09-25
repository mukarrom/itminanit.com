/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // daisyui: {
  //   themes: [
  //     {
  //       light: {
  //         primary: '#03a9f5',

  //         secondary: '#6a05b2',

  //         accent: '#37CDBE',

  //         neutral: '#3D4451',

  //         'base-100': '#FFFFFF',

  //         info: '#3ABFF8',

  //         success: '#36D399',

  //         warning: '#FBBD23',

  //         error: '#F87272',
  //       },
  //     },
  //   ],
  // },
  theme: {
    extend: {
      colors: {
        blue: '#007bff',
        indigo: '#6610f2',
        purple: '#6f42c1',
        pink: '#e83e8c',
        red: '#dc3545',
        orange: '#fd7e14',
        yellow: '#ffc107',
        green: '#28a745',
        teal: '#20c997',
        cyan: '#17a2b8',
        white: '#fff',
        gray: '#6c757d',
        'gray-dark': '#343a40',
        primary: '#007bff',
        secondary: '#6c757d',
        success: '#28a745',
        info: '#17a2b8',
        warning: '#ffc107',
        danger: '#dc3545',
        light: '#f8f9fa',
        dark: '#343a40',
      },
      backgroundImage: {
        'service-pattern': "url('/src/assets/shap/dot-shape.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require('daisyui')],
};
