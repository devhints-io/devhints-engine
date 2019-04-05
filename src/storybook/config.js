import { configure } from '@storybook/react'

const stories = require.context('../', true, /\.stories\.(js|tsx)$/)

const loadStories = () => {
  stories.keys().forEach(stories)
}

// https://www.gatsbyjs.org/docs/visual-testing-with-storybook/
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
}
global.__PATH_PREFIX__ = ''
window.___navigate = pathname => {
  // action('NavigateTo:')(pathname)
}

// Configure Storybook
configure(loadStories, module)
