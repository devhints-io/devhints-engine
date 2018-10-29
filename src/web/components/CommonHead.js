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
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Cousine"
      />
    </Helmet>

    <style jsx global>{`
      @import 'sanitize.css/sanitize.css';
      @import 'responsive-modular-scale.css/responsive-modular-scale.css';
      @import 'hint.css/hint.css';

      /* Vars */
      @import 'src/web/styles/variables.css';

      /* Utils */
      @import 'src/web/styles/utils/gutter-padding.css';
      @import 'src/web/styles/utils/heading-style.css';
      @import 'src/web/styles/utils/section-gutter.css';
      @import 'src/web/styles/utils/has-container.css';

      /* Base */
      @import 'src/web/styles/base/base.css';

      /* Markdown */
      @import 'src/web/styles/markdown/a-em.css';
      @import 'src/web/styles/markdown/code.css';
      @import 'src/web/styles/markdown/headings.css';
      @import 'src/web/styles/markdown/table.css';
      @import 'src/web/styles/markdown/p.css';
      @import 'src/web/styles/markdown/prism.css';
      @import 'src/web/styles/markdown/ul.css';

      /* Components */
      @import 'src/web/styles/components/announcements-item.css';
      @import 'src/web/styles/components/announcements-list.css';
      @import 'src/web/styles/components/attribute-peg.css';
      @import 'src/web/styles/components/berry-sponsor.css';
      @import 'src/web/styles/components/body-area.css';
      @import 'src/web/styles/components/codefund-sponsor.css';
      @import 'src/web/styles/components/comments-section.css';
      @import 'src/web/styles/components/h2-section.css';
      @import 'src/web/styles/components/h3-section-list.css';
      @import 'src/web/styles/components/h3-section.css';
      @import 'src/web/styles/components/headline-ad.css'; /* TODO */
      @import 'src/web/styles/components/hint-mark.css';
      /* @import 'src/web/styles/components/home-button.css'; DONE */
      /* @import 'src/web/styles/components/intro-content.css'; DONE */
      @import 'src/web/styles/components/main-heading.css';
      @import 'src/web/styles/components/missing-message.css';
      @import 'src/web/styles/components/notice-box.css';
      @import 'src/web/styles/components/page-actions.css'; /* TODO */
      @import 'src/web/styles/components/pages-list.css';
      /* @import 'src/web/styles/components/pre-footer.css'; */
      @import 'src/web/styles/components/push-button.css'; /* TODO */
      @import 'src/web/styles/components/related-post-item.css';
      @import 'src/web/styles/components/related-post-list.css';
      @import 'src/web/styles/components/related-posts-area.css';
      /* @import 'src/web/styles/components/related-posts-callout.css'; DONE */
      /* @import 'src/web/styles/components/related-posts-group.css'; */
      @import 'src/web/styles/components/related-posts-section.css';
      /* @import 'src/web/styles/components/search-box.css'; DONE */
      /* @import 'src/web/styles/components/search-footer-container.css'; */
      /* @import 'src/web/styles/components/search-footer.css'; */
      @import 'src/web/styles/components/side-ad.css'; /* TODO */
      @import 'src/web/styles/components/site-header.css';
      /* @import 'src/web/styles/components/top-nav.css'; DONE */

      a,
      button,
      summary {
        border-radius: 3px;
        transition: background-color 100ms linear;
      }

      a:focus,
      button:focus,
      summary:focus {
        outline: 0;
        background-color: color-mod(var(--brand-b) alpha(6%));
        animation: focus-in 300ms linear;
      }

      @keyframes focus-in {
        0% {
          background-color: color-mod(var(--brand-b) alpha(12%));
        }
      }
    `}</style>
  </React.Fragment>
)

export default CommonHead
