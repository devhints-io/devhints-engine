import h from 'hastscript'

// Shim for JSX
export default (name, props, ...kids) => h(name, props, kids)
