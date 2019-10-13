import React from 'react'
import { SiteSearchIndex } from '../../types/types'

/*
 * Le context
 */

export interface ConsumerRenderProps {
  siteSearchIndex?: SiteSearchIndex
  CONTENT?: any // TODO
  sheet?: any // TODO
}

export interface ConsumerProps {
  children: (rprops: ConsumerRenderProps) => any
}

export type ConsumerType = (props: ConsumerProps) => JSX.Element

export const ctx = React.createContext({})
export const Provider = ctx.Provider
export const Consumer = ctx.Consumer as ConsumerType
