import React from 'react'

export type Component = React.Component | React.FunctionComponent

export interface Pages {
  [page: string]: Page
}

export type Page = [Component, {}] | Component
