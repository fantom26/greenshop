module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-rational-order"],
  customSyntax: "postcss-jsx",
  rules: {
    // Color https://stylelint.io/user-guide/rules/#color
    "color-named": "never",
    // Declaration https://stylelint.io/user-guide/rules/#declaration
    "declaration-no-important": true,
    // Max & min https://stylelint.io/user-guide/rules/#max--min
    "max-nesting-depth": [
      4,
      {
        ignore: ["pseudo-classes"],
        ignoreAtRules: ["media"]
      }
    ],
    // Notation https://stylelint.io/user-guide/rules/#notation
    "color-hex-length": "long",
    "import-notation": "string",
    // Unit https://stylelint.io/user-guide/rules/#unit
    "unit-allowed-list": ["%", "deg", "rem", "em", "vw", "vh", "s", "fr"],
    // Function https://stylelint.io/user-guide/rules/#function
    "function-disallowed-list": ["rgb"],
    "function-no-unknown": null,
    // Quotes https://stylelint.io/user-guide/rules/#quotes
    "font-family-name-quotes": "always-where-required",
    "function-url-quotes": "always",
    "selector-attribute-quotes": "always",
    // Redundant https://stylelint.io/user-guide/rules/#redundant
    "shorthand-property-no-redundant-values": true,
    // Whitespace inside https://stylelint.io/user-guide/rules/#whitespace-inside
    "comment-whitespace-inside": "always",
    // Invalid https://stylelint.io/user-guide/rules/#invalid
    "media-query-no-invalid": null,
    "plugin/rational-order": [
      true,
      {
        "border-in-box-model": true,
        "empty-line-between-groups": true
      }
    ],
    ignoreFiles: ["src/styles/libs/**.styled.tsx"],
    overrides: [
      {
        files: ["src/*/**.styled.tsx"]
      }
    ]
  }
};
