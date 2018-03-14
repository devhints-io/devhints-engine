const { run } = require('./index')

const cli = require('meow')(`
  Usage:
  $ sheet-linter

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
