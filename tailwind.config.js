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
      colors: {
        'ace-blue': '#0066CC',
        'ace-blue-dark': '#004C99',
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