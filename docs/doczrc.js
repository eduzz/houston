export default {
  typescript: true,
  files: ["./**/*.mdx", "../packages/**/*.mdx"],
  docgenConfig: {
    searchPatterns: [
      "./**/*.{ts,tsx}",
      "../packages/ui-components/**/*.{ts,tsx}",
      "!**/node_modules",
      "!**/doczrc.js",
    ]
  }
}
