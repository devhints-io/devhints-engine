/**
 * Convert to a padding value.
 *
 * @example
 *     padify(24) // => '24px'
 */

function padify(
  value: boolean | string | number | null | undefined,
  defaultValue: string = '16px'
): string {
  if (!value) return '0'
  if (typeof value === 'string') return value
  if (typeof value === 'number') return `${value}px`
  if (value) return defaultValue
  return '0'
}

export default padify
