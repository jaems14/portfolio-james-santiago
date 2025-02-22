import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        pixel: ['Press Start 2P', 'VT323', 'monospace']
      },
      colors: {
        'pixel-white': '#f0f0f0',
        'pixel-black': '#222222',
        'pixel-primary': '#cba400',
        'pixel-secondary': '#4ecdc4',
        'pixel-accent': '#ffe66d'
      },
      boxShadow: {
        'pixel': '4px 4px 0px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'pixel-float': 'pixelFloat 3s ease-in-out infinite',
        'pixel-bounce': 'pixelBounce 1s ease-in-out infinite',
        'pixel-spin': 'pixelSpin 10s linear infinite'
      },
      keyframes: {
        pixelFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        pixelBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        },
        pixelSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      backgroundImage: {
        'pixel-grid': 'linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
        'pixel-dots': 'radial-gradient(rgba(0, 0, 0, 0.2) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
} satisfies Config 