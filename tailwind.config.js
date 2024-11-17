/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'primary': '#BF046B',
        'orange': '#F29D35',
        'purple': '#BDB0D9',
        'primary-50': '#F2D5DB',
        'orange-50': '#F2DBA7',
        'white': '#FFF'
      },
      fontFamily: {
        sans: ['Livvic'],
      },
      extend: {
        height: {
          '128': '32rem',
          '144': '36rem',
        }
      }
    }
  }