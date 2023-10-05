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

  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
  theme: {
    extend: {
      colors: {
        primary: '#3363f4',
        secondary: '#520088',
        secondary2: '#03a9f5',
      },
      screens: {
        xsMax: { raw: '(max-width: 420px)' },
        smMax: { raw: '(max-width: 640px)' },
        mdMax: { raw: '(max-width: 768px)' },
        lgMax: { raw: '(max-width: 1024px)' },
        xlMax: { raw: '(max-width: 1280px)' },
        tablet: { min: '640px', max: '1023px' },
        // => @media (min-width: 640px) { ... }

        laptop: { min: '1024px', max: '1280px' },
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      backgroundImage: {
        'service-pattern': "url('/src/assets/shap/dot-shape.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require('daisyui')],
};
