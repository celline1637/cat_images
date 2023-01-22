const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const tsConfigPath = path.resolve(__dirname, './tsconfig.json');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({ configFile: tsConfigPath })],
  },
};
