module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "next/core-web-vitals",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "plugin:@typescript-eslint/recommended"
  ],
  overrides: [
    {
      files: ["**.ts", "**.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "no-console": "error",
    "no-underscore-dangle": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "react/prop-types": "off", // If you're using TypeScript, prop-types are not needed
    "@typescript-eslint/explicit-module-boundary-types": "off", // Allows you to skip explicit return types in TypeScript
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }], // Only .tsx files for JSX
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ],
    "import/no-unresolved": "off", // TypeScript takes care of this
    "react/react-in-jsx-scope": "off", // Not needed in Next.js
    "react/jsx-props-no-spreading": "off", // Allowing spread props
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/prefer-default-export": "off"
  },
  settings: {
    react: {
      version: "18.2.0"
    }
  }
};
