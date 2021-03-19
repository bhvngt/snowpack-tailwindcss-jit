const isProduction = process.env.NODE_ENV === "production";
const tailwindcss = isProduction ? "tailwindcss" : "@tailwindcss/jit";
module.exports = {
  plugins: {
    "@tailwindcss/jit": {},
    autoprefixer: {},
  },
};
