import { graphql, useStaticQuery } from 'gatsby'

/**
 * Hook for accessing site content (labels and stuff)
 */

const useSiteContent = (): {
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
  notFound: {
    description: string
    home: string
    title: string
  }
} => {
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
            notFound {
              description
              home
              title
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

  return useStaticQuery(QUERY).site.siteMetadata.content
}

export default useSiteContent
