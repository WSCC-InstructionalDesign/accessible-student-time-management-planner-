/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for accessibility and branding
        'focus': {
          'ring': '#3B82F6',
          'visible': '#1D4ED8'
        },
        'status': {
          'success': '#10B981',
          'warning': '#F59E0B',
          'error': '#EF4444',
          'info': '#3B82F6'
        }
      },
      fontFamily: {
        // System fonts for better accessibility
        'sans': [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif'
        ]
      },
      fontSize: {
        // Accessible font sizes
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.6' }]
      },
      spacing: {
        // Touch-friendly spacing
        '18': '4.5rem',
        '88': '22rem'
      },
      minHeight: {
        // Minimum touch target sizes (44px)
        'touch': '2.75rem'
      },
      minWidth: {
        'touch': '2.75rem'
      }
    },
  },
  plugins: []
}
