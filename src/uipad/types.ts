/** Inheritable options */
export interface FrameOptions {
  size: number | null
  width: number | null

  /** Grid size multiplier */
  grid: number

  /** Padding inside frames */
  pad: number | string | boolean

  /** Background of frames */
  background: string

  /** Margin in between */
  margin: number

  /** If true, wrap in an iframe (experimenal) */
  iframe?: boolean
}

export interface FrameProps extends Partial<FrameOptions> {
  children: React.ReactNode
  title?: string
}
