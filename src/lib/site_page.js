/* @flow */
import type { AllSitePage, PageEdge, SiteLink } from '../types'

/**
 * Converts AllSitePage to SiteLinks
 */

export function toSiteLinks (pages?: AllSitePage): Array<SiteLink> {
  if (!pages || !pages.edges) return []

  return pages.edges.map((edge: PageEdge) => {
    return {
      path: edge.node.context.nodePath,
      title: edge.node.context.title
    }
  })
}
