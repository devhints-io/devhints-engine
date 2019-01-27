import React from 'react'
import { SiteSearchIndex } from '../types'

/*
 * Le context
 */

export type ConsumerRenderProps = {
  siteSearchIndex: SiteSearchIndex
}

export type ConsumerProps = {
  children: (rprops: ConsumerRenderProps) => any
}

export type ConsumerType = (props: ConsumerProps) => JSX.Element

export const ctx = React.createContext({})
export const Provider = ctx.Provider
export const Consumer = ctx.Consumer as ConsumerType
