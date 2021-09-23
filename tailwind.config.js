module.exports = {
  purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
      backgroundImage: {
        'cryptenet-logo': "url('/cryptenet.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
