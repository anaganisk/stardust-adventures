module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    enabled: true,
    preserveHtmlElements: false,
    content: ["./layouts/**/*.html"],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
  options: {
   // whitelist: ['h1', 'h2', 'h3', 'p', 'blockquote', 'strong' /* etc. */],
  },
};
