import { graphql, useStaticQuery } from 'gatsby'

interface Result {
  home: {
    description: string
    recentlyUpdated: string
    title: string
    updatedLabel: string
  }
  sheet: {
    suffix: string
  }
  topNav: {
    edit: string
    editOnGithub: string
    title: string
  }
}

/**
 * Hook for accessing site content (labels and stuff)
 */

const useSiteContent = (): Result => {
  return useStaticQuery(QUERY).site.siteMetadata.content
}

// Add more stuff here as needed
const QUERY = graphql`
  {
    site {
      siteMetadata {
        content {
          sheet {
            suffix
          }
          home {
            description
            recentlyUpdated
            title
            updatedLabel
          }
          topNav {
            edit
            editOnGithub
            title
          }
        }
      }
    }
  }
`

export default useSiteContent
