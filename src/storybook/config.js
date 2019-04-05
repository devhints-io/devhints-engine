import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import centered from '@storybook/addon-centered/react'

const stories = require.context('../', true, /\.stories\.(js|tsx)$/)

const loadStories = () => {
  stories.keys().forEach(stories)
}

addDecorator(centered)

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
