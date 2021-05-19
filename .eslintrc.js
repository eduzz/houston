module.exports = {
  "overrides": [{
    "files": ["*.mdx"],
    "extends": ["@eduzz/eslint-config-houston/mdx"],
    "rules": {
      "react-hooks/exhaustive-deps": "off"
    }
  }, {
    "files": ["*.tsx", "*.ts", "*.js", "*.jsx"],
    "extends": "@eduzz/eslint-config-houston",
    "rules": {
      "@typescript-eslint/ban-ts-comment": "off",
      "no-restricted-imports": ["error", "date-fns", "mdi-react", "lodash", "@material-ui/core", "@material-ui/styles", "@eduzz/houston-ui/*"]
    }
  }]
}