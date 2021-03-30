export default {
  typescript: true,
  files: ["./**/*.mdx", "../packages/ui-components/**/*.mdx"],
  docgenConfig: {
    searchPatterns: [
      "./**/*.{ts,tsx,js,jsx,mjs}",
      "../packages/ui-components/**/*.{ts,tsx,js,jsx,mjs}",
      "!**/node_modules",
      "!**/doczrc.js",
    ]
  }
}
