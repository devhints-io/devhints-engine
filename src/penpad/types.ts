import React from 'react'

export type Component = React.Component | React.FunctionComponent

export interface Specimens {
  [id: string]: Specimen
}

export interface Pages {
  [id: string]: () => React.ReactNode
}

/**
 * Primary configuration passed onto the root Styleguide object
 */

export interface Config {
  title?: string
  specimens: Specimens
  pages: Pages
  /** Experimental: use iframe */
  useFrame: boolean
}

export interface Specimen {
  view: () => React.ReactNode

  /** The description to be shown */
  description?: React.ReactNode

  /** Set to 'false' to force no-frames in this specimen */
  useFrame?: boolean

  width?: string | number
  background?: string
  padding?: string | number
}

/**
 * Global app state
 */

export interface State {
  /** The title. */
  title: string

  /** Current view that is to be shown. */
  activeView:
    | {
        type: 'specimen'
        specimenId?: string
      }
    | {
        type: 'page'
        pageId?: string
      }

  /**
   * Specimens to display (may be 'null' if loading asynchronously).
   * Taken from Config props.
   */
  specimens: Specimens | null

  /**
   * Pages to display (may be 'null' if loading asynchronously).
   * Taken from Config props.
   */
  pages: Pages | null

  /** Use iframe */
  useFrame: boolean

  frameWidth: number | null
}
