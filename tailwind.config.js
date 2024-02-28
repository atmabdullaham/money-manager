/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./src/**/*.{html,js}"],
 theme: {
   extend: {},
 },
 plugins: [],
}

module.exports = {
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        "heading": "#31A5AC",
      },
    }
  }
}

module.exports = {
  // ...
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
