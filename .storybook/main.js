const path = require('path');

module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  'framework': '@storybook/react',
  'core': {
    'builder': '@storybook/builder-vite',
  },
  async viteFinal(config) {
    return {
      ...config,

      /**
       * Import alias support
       * @see https://github.com/storybookjs/builder-vite/issues/85#issuecomment-900831050
       */
      resolve: {
        alias: [{ find: '~', replacement: path.resolve(__dirname, '../src') }],
      },
    };
  },
};
