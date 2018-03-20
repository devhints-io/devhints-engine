/* @flow */
/* eslint-disable no-undefined */

/**
 * Gatsby has a magical construct where you can tag strings with `graphql`,
 * which causes errors in Flow. This should make Flow assume that there's a global
 * function for it.
 */

declare function graphql (...foo: Array<any>): any
