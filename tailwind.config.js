/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, ts}",
    "./ node_modules / flowbite/**/ *.js", // add this line
  ],
  plugins: [
    require("flowbite/plugin"), // add this line
  ],
};
