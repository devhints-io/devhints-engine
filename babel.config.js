const { NODE_ENV } = process.env
const IS_TEST = NODE_ENV === 'test'

module.exports = {
  presets: [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: IS_TEST ? 'commonjs' : false,
        useBuiltIns: 'usage',
        shippedProposals: true,
        targets: {
          browsers: ['>0.25%', 'not dead']
        }
      }
    ],
    [
      '@babel/preset-react',
      {
        useBuiltIns: true,
        pragma: 'React.createElement'
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true
      }
    ],
    '@babel/plugin-syntax-dynamic-import',
    'babel-plugin-macros',
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: true,
        regenerator: true
      }
    ]
  ]
}
