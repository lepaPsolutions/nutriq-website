/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand — official Nutriq palette
        // Deep teal #00494D is the canonical dark brand color (used in app sidebar)
        brand: {
          DEFAULT: "#0AA6A9",
          50: "#E6F6F7",
          100: "#B3E5E8",
          200: "#80D4D9",
          300: "#4DC3CA",
          400: "#26B4BC",
          500: "#0AA6A9",
          600: "#007E85",
          700: "#00595E",
          800: "#005558",
          900: "#00494D",
        },
        // Peach accent — used sparingly
        peach: {
          DEFAULT: "#F7AE7E",
          50: "#FFF4EC",
          100: "#FCE4D2",
          200: "#FAD2B5",
          300: "#F8C098",
          400: "#F7AE7E",
          500: "#F49862",
          600: "#E37636",
          700: "#B85A24",
        },
        // Cream — for SELECTIVE sections, not body
        cream: {
          50: "#FDFCF9",
          100: "#FAF8F4",
          200: "#F5F3ED",
          300: "#E8E3D8",
          400: "#D5C29A",
          500: "#9E8E7F",
          600: "#7B6B5F",
          700: "#5E5149",
          800: "#473D37",
          900: "#2A2421",
        },
        // Neutral grays — modern SaaS canvas
        gray: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
        ink: {
          DEFAULT: "#0F1419",
          50: "#F8F9FA",
          900: "#0F1419",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        display: ['"Inter"', "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        // Modern SaaS display scale — Inter heavy weights, tight tracking
        "display-xl": ["clamp(3rem, 6.5vw, 5.5rem)", { lineHeight: "1.0", letterSpacing: "-0.035em", fontWeight: "700" }],
        "display-lg": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-md": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-sm": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        overline: ["0.75rem", { lineHeight: "1", letterSpacing: "0.14em", fontWeight: "600" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.02em",
      },
      maxWidth: {
        prose: "68ch",
        container: "1240px",
        narrow: "920px",
      },
      borderRadius: {
        // Modern SaaS — sharper than editorial
        lg: "10px",
        xl: "12px",
        "2xl": "16px",
        "3xl": "20px",
      },
      boxShadow: {
        // Modern SaaS shadow system
        xs: "0 1px 2px rgba(16, 24, 40, 0.05)",
        sm: "0 1px 3px rgba(16, 24, 40, 0.1), 0 1px 2px rgba(16, 24, 40, 0.06)",
        card: "0 1px 3px rgba(16, 24, 40, 0.06), 0 4px 8px -2px rgba(16, 24, 40, 0.04)",
        "card-hover": "0 4px 6px -1px rgba(16, 24, 40, 0.08), 0 12px 24px -6px rgba(16, 24, 40, 0.08)",
        lg: "0 10px 15px -3px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.04)",
        figure: "0 24px 48px -12px rgba(0, 73, 77, 0.18), 0 8px 16px -4px rgba(16, 24, 40, 0.06)",
        glow: "0 0 0 1px rgba(10, 166, 169, 0.15), 0 8px 32px rgba(10, 166, 169, 0.16)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fadeIn 0.8s ease-out both",
        marquee: "marquee 50s linear infinite",
        "spin-slow": "spin 18s linear infinite",
        "pulse-ring": "pulseRing 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "subtle-float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseRing: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.5" },
          "50%": { transform: "scale(1.4)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
