import groupBy from 'group-by'
import {
  AllSitePage,
  GroupedSiteLinks,
  PageEdge,
  SiteLink
} from '../types/types'

/**
 * Converts AllSitePage to SiteLinks
 */

export function toSiteLinks(pages?: AllSitePage): SiteLink[] {
  if (!pages || !pages.edges) return []

  return pages.edges.map(toSiteLink)
}

/**
 * Convert an edge to a site link
 */

export function toSiteLink(edge: PageEdge): SiteLink {
  return {
    path: edge.node.context.nodePath,
    title: edge.node.context.title
  }
}

/**
 * Groups by category, returns sitelinks
 */

export function groupByCategory(allPages: AllSitePage): GroupedSiteLinks {
  const groups: { [key: string]: PageEdge[] } = groupBy(
    allPages.edges,
    (edge: PageEdge) => edge.node.context.category
  )

  return Object.keys(groups).reduce((result, group: string) => {
    const edges = groups[group]
    return { ...result, [group]: edges.map(toSiteLink) }
  }, {})
}
