// See https://www.gatsbyjs.org/docs/unit-testing/
module.exports = {
  transform: {
    '^.+\\.[tj]sx?$': `<rootDir>/support/jest.preprocess.js`
  },
  setupFiles: ['./tests/jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/.cache/'],
  testURL: 'http://localhost',
  // transformIgnorePatterns: [
  //   'xxxx/node_modules/(?!(devhints|@devhints|rehype-decorate/|gatsby/)).+$'
  // ],
  moduleNameMapper: {
    '.*raw-loader.*': '<rootDir>/__mocks__/filemock.js',
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/filemock.js`
  }
}
