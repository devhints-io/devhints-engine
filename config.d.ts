/**
 * Raw content
 */

export const CONTENT: {
  home: {
    title: string
    description: string
    recentlyUpdated: string
    updatedLabel: string
  }

  // Home page banner (SiteHeader)
  siteHeader: {
    title: string
    tagline: string
  }

  // Top navigation (TopNav)
  topNav: {
    title: string
    edit: string
    editOnGithub: string
  }

  sheet: {
    suffix: string
  }

  // Callout at the bottom of the sheets
  relatedPostsCallout: {
    description: string
    link: string
  }

  // Search form in the home page
  searchForm: {
    defaultPlaceholder: string
    homePlaceholder: string
    prefix: string
  }

  // Comments area in the sheets
  commentsArea: {
    suffix: string
    link: string
  }

  // 404 page
  notFound: {
    title: string
    description: string
    home: string
  }
}

/**
 * Google Analytics integration (TODO)
 */

export const GOOGLE_ANALYTICS: {
  hostname: string
  id: string
}

/**
 * Disqus integration (TODO)
 * @name DISQUS
 */

export const DISQUS: {
  enabled: boolean
  host: string
}

/**
 * Codefund.io integration (TODO)
 * @name CODEFUND
 */

export const CODEFUND: {
  enabled: boolean
  token: string
}

/**
 * Assets. No trailing slash please!
 * @name ASSETS
 */

export const ASSETS: {
  preview_host: string
}

/**
 * GitHub (TODO)
 * @name GITHUB
 */

export const GITHUB: {
  repo: string
  branch: string
}
