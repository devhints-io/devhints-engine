import React from 'react'
import TopNav from '../web/components/TopNav'

export default {
  TopNav: { view: () => <TopNav title='Hello' />, width: '100%' },
  'TopNav/back': { view: () => <TopNav back title='Hello' /> },
  'TopNav/noTitle': { view: () => <TopNav back /> }
}
