import React from 'react'

export interface IFrame {
  node: HTMLIFrameElement
}

/**
 * React hook to dynamically adjust iframe size.
 * Returns the following things:
 *
 * - `ref` - set this ref to the `<iframe>` element
 * - `height` - set this to the iframe's `style`
 * - `update` - function to update the height as needed
 *
 * Based on https://github.com/ryanseddon/react-frame-component/issues/91#issuecomment-481736423
 */

export const useIFrameSize = ({ children }: { children: React.ReactNode }) => {
  // The height to set
  const [height, setHeight] = React.useState<number | void>(undefined)

  // <iframe> element
  const ref: React.RefObject<IFrame> = React.createRef()

  // Update handler
  const update = React.useMemo(
    () => () => {
      handleResize(ref, setHeight)
    },
    [ref, setHeight]
  )

  // Run the update handler on mount and update
  React.useEffect(update, [children])
  return { ref, height, update }
}

/**
 * Resize handler
 */

const handleResize = (
  iframe: React.RefObject<IFrame>,
  setHeight: (value: number | void) => any
) => {
  if (
    iframe.current &&
    iframe.current.node.contentDocument &&
    iframe.current.node.contentDocument.body.scrollHeight !== 0
  ) {
    setHeight(iframe.current.node.contentDocument.body.scrollHeight)
  }
}
