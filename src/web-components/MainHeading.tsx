import React from 'react'

export interface Props {
  title: string
  suffix: string
}

/**
 * Main heading
 */

const MainHeading = ({ title, suffix }: Props) => (
  <header className='main-heading -center'>
    <h1 className='h1'>
      {title} <em>{suffix}</em>
    </h1>

    <div className='adbox' />
  </header>
)

export default MainHeading
