module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },  // text-2xl
        'h2': { fontSize: theme('fontSize.xl') },   // text-xl
        'h3': { fontSize: theme('fontSize.lg') },   // text-lg
        'h4': { fontSize: theme('fontSize.base') }, // text-base
        'h5': { fontSize: theme('fontSize.sm') },   // text-sm
        'h6': { fontSize: theme('fontSize.xs') },   // text-xs
      });
    },
  ],
};


