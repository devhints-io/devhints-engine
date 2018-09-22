/* @flow */
import * as React from 'react'
import Helmet from 'react-helmet'

/**
 * Things that should be in all pages
 */

export const CommonHead = () => (
  <React.Fragment>
    <Helmet>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Cousine'
      />
    </Helmet>

    <style jsx global>{`
      @import 'sanitize.css/sanitize.css';
      @import 'responsive-modular-scale.css/responsive-modular-scale.css';
      @import 'hint.css/hint.css';

      /* Vars */
      @import 'src/styles/variables.css';

      /* Utils */
      @import 'src/styles/utils/gutter-padding.css';
      @import 'src/styles/utils/heading-style.css';
      @import 'src/styles/utils/section-gutter.css';
      @import 'src/styles/utils/has-container.css';

      /* Base */
      @import 'src/styles/base/base.css';

      /* Markdown */
      @import 'src/styles/markdown/a-em.css';
      @import 'src/styles/markdown/code.css';
      @import 'src/styles/markdown/headings.css';
      @import 'src/styles/markdown/table.css';
      @import 'src/styles/markdown/p.css';
      @import 'src/styles/markdown/prism.css';
      @import 'src/styles/markdown/ul.css';

      /* Components */
      @import 'src/styles/components/announcements-item.css';
      @import 'src/styles/components/announcements-list.css';
      @import 'src/styles/components/attribute-peg.css';
      @import 'src/styles/components/berry-sponsor.css';
      @import 'src/styles/components/body-area.css';
      @import 'src/styles/components/codefund-sponsor.css';
      @import 'src/styles/components/comments-section.css';
      @import 'src/styles/components/h2-section.css';
      @import 'src/styles/components/h3-section-list.css';
      @import 'src/styles/components/h3-section.css';
      @import 'src/styles/components/headline-ad.css'; /* TODO */
      @import 'src/styles/components/hint-mark.css';
      /* @import 'src/styles/components/home-button.css'; DONE */
      /* @import 'src/styles/components/intro-content.css'; DONE */
      @import 'src/styles/components/main-heading.css';
      @import 'src/styles/components/missing-message.css';
      @import 'src/styles/components/notice-box.css';
      @import 'src/styles/components/page-actions.css'; /* TODO */
      @import 'src/styles/components/pages-list.css';
      /* @import 'src/styles/components/pre-footer.css'; */
      @import 'src/styles/components/push-button.css'; /* TODO */
      @import 'src/styles/components/related-post-item.css';
      @import 'src/styles/components/related-post-list.css';
      @import 'src/styles/components/related-posts-area.css';
      /* @import 'src/styles/components/related-posts-callout.css'; DONE */
      /* @import 'src/styles/components/related-posts-group.css'; */
      @import 'src/styles/components/related-posts-section.css';
      /* @import 'src/styles/components/search-box.css'; DONE */
      /* @import 'src/styles/components/search-footer-container.css'; */
      /* @import 'src/styles/components/search-footer.css'; */
      @import 'src/styles/components/side-ad.css'; /* TODO */
      @import 'src/styles/components/site-header.css';
      /* @import 'src/styles/components/top-nav.css'; DONE */
    `}</style>
  </React.Fragment>
)

export default CommonHead
