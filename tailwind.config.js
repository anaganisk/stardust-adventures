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
  //whitelist: ['blockquote', 'strong' /* etc. */],
  },
};
