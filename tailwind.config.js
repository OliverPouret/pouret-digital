/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"PP Neue Montreal"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          0: 'var(--color-ink-0)',
          50: 'var(--color-ink-50)',
          100: 'var(--color-ink-100)',
          200: 'var(--color-ink-200)',
          300: 'var(--color-ink-300)',
          400: 'var(--color-ink-400)',
          500: 'var(--color-ink-500)',
          900: 'var(--color-ink-900)',
        },
        bg: {
          base: 'var(--color-bg-base)',
          raised: 'var(--color-bg-raised)',
          surface: 'var(--color-bg-surface)',
          inverse: 'var(--color-bg-inverse)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          dim: 'var(--color-accent-dim)',
          glow: 'var(--color-accent-glow)',
          contrast: 'var(--color-accent-contrast)',
        },
        line: {
          subtle: 'var(--color-line-subtle)',
          DEFAULT: 'var(--color-line)',
          strong: 'var(--color-line-strong)',
        },
      },
      spacing: {
        gutter: 'var(--space-gutter)',
        section: 'var(--space-section)',
      },
      borderRadius: {
        xs: 'var(--radius-xs)',
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        glow: 'var(--shadow-glow)',
        card: 'var(--shadow-card)',
        cardHover: 'var(--shadow-card-hover)',
      },
      zIndex: {
        base: 'var(--z-base)',
        raised: 'var(--z-raised)',
        sticky: 'var(--z-sticky)',
        nav: 'var(--z-nav)',
        overlay: 'var(--z-overlay)',
        modal: 'var(--z-modal)',
        toast: 'var(--z-toast)',
      },
      maxWidth: {
        container: 'var(--container-max)',
      },
    },
  },
  plugins: [],
};
