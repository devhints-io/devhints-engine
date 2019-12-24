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

interface Options {
  frame: Partial<FrameOptions> | null | undefined
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
}: Options & { children: React.ReactNode }) => {
  const thisValue = frame || {}
  const mergedValue = useOptions(thisValue)
  return <Context.Provider value={mergedValue}>{children}</Context.Provider>
}
