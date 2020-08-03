module.exports = {
  extends: '@kot-shrodingera-team/eslint-config-germes-base/.eslintrc',
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      settings: {
        'import/resolver': {
          typescript: {},
        },
      },
    },
  ],
};
