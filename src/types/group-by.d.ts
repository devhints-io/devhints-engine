declare module 'group-by' {
  interface Dictionary<T> {
    [key: string]: T[]
  }

  export default function groupBy<T>(
    collection: T[],
    groupFn: (it: T) => any
  ): Dictionary<T>
}
