const path = require('path');

module.exports = {
  content: [
    path.resolve(
    __dirname,
    `./{layouts,components,pages}/**/*.{js,ts,jsx,tsx}`
    ),
  ],
  important: true,
  plugins: [],
};
