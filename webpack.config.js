const path = require('path');

module.exports = {
  entry: './src/index.js', // 👈 Your JS entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '', // 👈 Important for GitHub Pages
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Optional: If using modern JS
        },
      },
      {
        test: /\.(glb|gltf|png|jpg|jpeg|gif|svg|obj|mtl|bin)$/, // 👈 For 3D assets & textures
        type: 'asset/resource',
      },
    ],
  },
  devtool: 'source-map', // Optional: Helpful for debugging
};
