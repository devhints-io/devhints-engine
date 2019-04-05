import React from 'react'
import { storiesOf } from '@storybook/react'
import Layout from './Layout'

storiesOf('Layout', module).add('Default', () => {
  return <Layout>This is our layout</Layout>
})
