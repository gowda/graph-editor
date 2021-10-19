module.exports = {
  overrides: [
    {
      files: ['**/*.ts'],
      parserOptions: {
        project: './tsconfig.json',
        // https://stackoverflow.com/a/64488474/1993020
        createDefaultProgram: true,
      },
    },
  ],
};
