/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,svelte,vue}'],
  theme: {
    extend: {
      colors: {
        // Colores corporativos de CSI
        primary: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#c7d7fe',
          300: '#a5b9fc',
          400: '#8094f7',
          500: '#6366f1',
          600: '#4f52e6',
          700: '#3f3fcc',
          800: '#2e2f8f',
          900: '#1a2559', // Azul marino principal
          950: '#0f1635',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F1F1F1', // Color de fondo principal del sitio
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundColor: {
        'site': '#F1F1F1',
      },


      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },




    },
  },
  plugins: [],
}
