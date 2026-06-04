import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#374151',
          hover: '#1f2937',
          focus: '#111827',
        },
        ink: {
          DEFAULT: '#0a0a0f',
          muted: '#3a3c47',
          subtle: '#6b7280',
          tertiary: '#9ca3af',
        },
        canvas: '#ffffff',
        surface: {
          1: '#f9fafb',
          2: '#f3f4f6',
          3: '#e9eaed',
          4: '#e2e4e8',
        },
        hairline: {
          DEFAULT: '#e5e7eb',
          strong: '#d1d5db',
          tertiary: '#b8bcc4',
        },
        success: '#16a34a',
        'brand-secure': '#4b5563',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SF Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        'display-xl': ['80px', { lineHeight: '1.05', letterSpacing: '-0.0375em' }],
        'display-lg': ['56px', { lineHeight: '1.10', letterSpacing: '-0.032em' }],
        'display-md': ['40px', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
        headline: ['28px', { lineHeight: '1.20', letterSpacing: '-0.021em' }],
        'card-title': ['22px', { lineHeight: '1.25', letterSpacing: '-0.018em' }],
        subhead: ['20px', { lineHeight: '1.40', letterSpacing: '-0.01em' }],
        'body-lg': ['18px', { lineHeight: '1.50', letterSpacing: '-0.006em' }],
        body: ['16px', { lineHeight: '1.50', letterSpacing: '-0.003em' }],
        'body-sm': ['14px', { lineHeight: '1.50', letterSpacing: '0' }],
        caption: ['12px', { lineHeight: '1.40', letterSpacing: '0' }],
        button: ['14px', { lineHeight: '1.20', letterSpacing: '0', fontWeight: '500' }],
        eyebrow: ['13px', { lineHeight: '1.30', letterSpacing: '0.031em' }],
        mono: ['13px', { lineHeight: '1.50', letterSpacing: '0' }],
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        xxl: '24px',
        pill: '9999px',
        full: '9999px',
      },
      spacing: {
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '48px',
        section: '96px',
      },
      maxWidth: {
        content: '1280px',
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
