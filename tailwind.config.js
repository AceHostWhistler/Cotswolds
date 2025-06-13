/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      height: {
        'screen-ios': '-webkit-fill-available',
      },
      minHeight: {
        'screen-ios': '-webkit-fill-available',
      },
      colors: {
        'ace-blue': '#333333',
        'ace-blue-dark': '#222222',
        'brand-gold': '#ba9765',
        'brand-cream': '#f5f0e8',
        blue: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#939393',
          600: '#6e6e6e',
          700: '#4a4a4a',
          800: '#333333',
          900: '#1f1f1f',
          950: '#0d0d0d',
        },
        indigo: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#939393',
          600: '#6e6e6e',
          700: '#4a4a4a',
          800: '#333333',
          900: '#1f1f1f',
          950: '#0d0d0d',
        },
        sky: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#939393',
          600: '#6e6e6e',
          700: '#4a4a4a',
          800: '#333333',
          900: '#1f1f1f',
          950: '#0d0d0d',
        },
        cyan: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#939393',
          600: '#6e6e6e',
          700: '#4a4a4a',
          800: '#333333',
          900: '#1f1f1f',
          950: '#0d0d0d',
        },
      },
      spacing: {
        'tap': '44px',
      },
      padding: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  // Add these optimization settings for production builds
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
} 