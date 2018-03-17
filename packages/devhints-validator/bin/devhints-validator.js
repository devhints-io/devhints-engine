const { run } = require('../lib')

const cli = require('meow')(`
  Usage:
  $ devhints-validator

  Options:
  -f, --fix        auto-fix in place

  Options:
  -h, --help       show usage information
  -v, --version    print version info and exit
`, {
  boolean: [
    'help',
    'version',
    'fix'
  ],
  alias: {
    h: 'help',
    v: 'version',
    f: 'fix'
  }
})

run(cli.input, cli.flags)
  .then(result => {
    console.warn('')
    console.warn('  devhints-validator:', result.summary)
    if (result.messages) {
      result.messages.forEach(msg => { console.warn(`  ${msg}`) })
    }
    console.warn('')
    process.exit(result.code)
  })
