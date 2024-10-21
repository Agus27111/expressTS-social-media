// eslint.config.js
module.exports = {
  root: true, // Menentukan bahwa ini adalah konfigurasi root untuk ESLint
  parser: "@typescript-eslint/parser", // Menggunakan parser TypeScript
  overrides: [
    {
      files: ["*.ts"], // Mengatur linting untuk file TypeScript
      extends: [
        "eslint:recommended", // Menggunakan rekomendasi dasar dari ESLint
        "plugin:@typescript-eslint/recommended", // Menggunakan rekomendasi dari plugin TypeScript ESLint
      ],
      parserOptions: {
        project: ["./tsconfig.json"], // Menggunakan project tsconfig
      },
      plugins: ["@typescript-eslint"], // Menggunakan plugin TypeScript ESLint
      
    },
  ],
  ignorePatterns: ["*!.*", "dist", "build", "node_modules"], // Mengabaikan file tertentu dalam linting
};
