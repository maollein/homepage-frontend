module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import'
  ]
};