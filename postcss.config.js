// autoprefix CSS for cross-browser compatibility
module.exports = {
  plugins: [
    require("autoprefixer"),
    require("cssnano"), // Minify CSS
  ],
};
