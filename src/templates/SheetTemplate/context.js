/* @flow */
import * as React from 'react'
import type { Content } from '../../types'

export type Context = {
  CONTENT: Content
}

/*
 * Le context
 */

export const ctx = React.createContext({})

export const Provider = ctx.Provider

export const Consumer = ctx.Consumer
