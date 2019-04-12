import React from 'react'
import TopNav from '../web/components/TopNav'

export default {
  'TopNav/default': { view: () => <TopNav title='Hello' /> },
  'TopNav/back': { view: () => <TopNav back title='Hello' /> },
  'TopNav/noTitle': { view: () => <TopNav back /> }
}
