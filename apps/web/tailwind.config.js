/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0B1220',
          slate: '#0F172A',
          blue: '#2563EB',
          green: '#22C55E'
        },
        glass: 'rgba(255,255,255,0.06)'
      },
      boxShadow: {
        glow: '0 0 40px rgba(37,99,235,0.35)'
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  },
  plugins: []
};
