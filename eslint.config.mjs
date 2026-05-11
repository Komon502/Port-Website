import { FlatCompat } from "@eslint/eslintrc";
import tsParser from "@typescript-eslint/parser";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
];

// Fix parser configuration
eslintConfig.forEach(config => {
  if (config.languageOptions && config.languageOptions.parser) {
    config.languageOptions.parser = tsParser;
  }
  if (config.parser && typeof config.parser === 'function') {
    delete config.parser;
  }
});

export default eslintConfig;
