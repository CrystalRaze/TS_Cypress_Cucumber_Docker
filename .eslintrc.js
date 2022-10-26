module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["plugin:cypress/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "linebreak-style": 0,
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};
