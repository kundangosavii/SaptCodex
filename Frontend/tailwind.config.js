/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          0: '#000000',
        },
        accent: {
          DEFAULT: '#61b6ff',
          deep: '#2b9bff',
        },
        neutral: {
          muted: 'rgba(255,255,255,0.6)',
          'muted-2': 'rgba(255,255,255,0.45)',
        },
      },
      spacing: {
        'sidebar': '240px',
        'sidebar-collapsed': '84px',
      },
    },
  },
  plugins: [],
}
