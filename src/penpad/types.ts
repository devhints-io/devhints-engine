import React from 'react'

export type Component = React.Component | React.FunctionComponent

export interface Specimens {
  [id: string]: Specimen
}

export interface Pages {
  [id: string]: Specimen
}

/**
 * Primary configuration passed onto the root Styleguide object
 */

export interface Config {
  title?: string
  specimens: Specimens
  pages: Pages
}

export interface Specimen {
  view: () => React.ReactNode

  /** The description to be shown */
  description?: React.ReactNode

  width?: string | number
  background?: string
  padding?: string | number
}