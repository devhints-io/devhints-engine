// @flow

/**
 * Frontmatter
 */

export type Attributes = {
  path?: string,
  title?: string
}

/**
 * A cheatsheet
 */

export type Document = {
  // => '/path/to/file.md'
  path: string,

  // Raw body before parsing
  rawBody: string,

  // parsed frontmatter (unparsed docs dont have attributes)
  attributes?: Attributes,

  // body text (unparsed has no body text)
  body?: string,

  // store the last error, eg, when parseMatter() fails
  error?: Error
}

/*
 * The result of a linting.
 */

export type Result = {|
  status: 'ok' | 'fixed' | 'error',

  // The document being parsed
  document: Document,

  // Warning and error messages. Blank if status is 'ok'
  messages?: Array<Message>,

  // What the file is supposed to contain
  output?: string,

  // If status is 'error', this contains the error
  error?: Error
|}

/**
 * The message in a result
 */

export type Message = {|
  message: string
|}

/**
 * Options from the CLI
 */

export type RunOptions = {
  // If true, fix things in place
  fix?: true
}
