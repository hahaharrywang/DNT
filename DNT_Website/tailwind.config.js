/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Brand Colors
      colors: {
        brand: {
          red: '#DC2626',
          blue: '#2563EB',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        red: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
      },
      
      // Typography
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        chinese: ['Noto Sans TC', 'PingFang TC', 'Hiragino Sans GB', 'Microsoft YaHei', 'sans-serif'],
      },
      
      // Font Sizes with Line Heights
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      
      // Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Border Radius
      borderRadius: {
        'brand': '12px',
        'brand-lg': '16px',
        'brand-xl': '20px',
      },
      
      // Box Shadows
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'brand': '0 10px 25px -3px rgba(220, 38, 38, 0.1), 0 4px 6px -2px rgba(220, 38, 38, 0.05)',
        'brand-lg': '0 20px 25px -5px rgba(220, 38, 38, 0.1), 0 10px 10px -5px rgba(220, 38, 38, 0.04)',
        'blue': '0 10px 25px -3px rgba(37, 99, 235, 0.1), 0 4px 6px -2px rgba(37, 99, 235, 0.05)',
      },
      
      // Animations
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-brand': 'pulse-brand 2s infinite',
      },
      
      // Keyframes
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'pulse-brand': {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(220, 38, 38, 0.7)',
          },
          '70%': {
            boxShadow: '0 0 0 10px rgba(220, 38, 38, 0)',
          },
        },
      },
      
      // Backdrop Blur
      backdropBlur: {
        'brand': '12px',
      },
      
      // Z-Index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      
      // Screens (Responsive Breakpoints)
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      
      // Container
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      
      // Aspect Ratio
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },
      
      // Letter Spacing
      letterSpacing: {
        'brand': '0.02em',
      },
      
      // Line Height
      lineHeight: {
        'brand': '1.6',
        'brand-tight': '1.4',
        'brand-loose': '1.8',
      },
      
      // Max Width
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      
      // Transition
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      
      // Transform
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
    },
  },
  plugins: [
    // Custom plugin for brand utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
        '.animation-delay-4000': {
          'animation-delay': '4s',
        },
        '.gradient-brand': {
          background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
        },
        '.gradient-brand-soft': {
          background: 'linear-gradient(135deg, #FEF2F2 0%, #FFFFFF 100%)',
        },
        '.text-gradient-brand': {
          background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.scrollbar-brand': {
          'scrollbar-width': 'thin',
          'scrollbar-color': '#DC2626 #F5F5F5',
        },
        '.scrollbar-brand::-webkit-scrollbar': {
          width: '8px',
        },
        '.scrollbar-brand::-webkit-scrollbar-track': {
          background: '#F5F5F5',
          'border-radius': '4px',
        },
        '.scrollbar-brand::-webkit-scrollbar-thumb': {
          background: '#DC2626',
          'border-radius': '4px',
        },
        '.scrollbar-brand::-webkit-scrollbar-thumb:hover': {
          background: '#B91C1C',
        },
      };
      
      addUtilities(newUtilities);
    },
  ],
}; 