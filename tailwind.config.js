module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        accent: '#E6F0FF',
        soft: '#F8FAFF',
        beige: '#FBF7F3'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  },
  plugins: []
}
