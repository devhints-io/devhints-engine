import React, { useContext } from 'react'
import { FrameOptions } from './types'

const defaults: FrameOptions = {
  margin: 24,
  grid: 128,
  pad: 0,
  background: '#fff',
  width: null,
  size: null
}

const Context = React.createContext<Partial<FrameOptions>>({})

/**
 * Fetches options from the parent Canvas
 */

export const useOptions = (overrides?: Partial<FrameOptions>): FrameOptions => {
  return { ...defaults, ...useContext(Context), ...overrides }
}

/**
 * Provider used by the canvas.
 * Used to propagate options to Frames.
 */

export const OptionsProvider = ({
  children,
  frame
}: {
  children: React.ReactNode
  frame: Partial<FrameOptions> | null | undefined
}) => {
  return <Context.Provider value={frame || {}}>{children}</Context.Provider>
}
