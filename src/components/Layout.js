/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./Layout.css"
import OpeningTime from "./OpeningTime"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
          <div>
            <h2>Kontaktdaten</h2>
            <div className="footer-entry footer-contact-wrapper">
              <div>Telefon: {` `}</div>

              <div>05251-7778818</div>
            </div>
            <div className="footer-entry footer-contact-wrapper">
              <div>Email: {` `}</div>

              <div>uni-pizza@gmail.com</div>
            </div>
          </div>
          <div>
            <h2>Adresse</h2>
            <div className="footer-entry">Stephanusstr. 48</div>
            <div className="footer-entry">33098 Paderborn</div>
          </div>
          <div>
            <OpeningTime />
          </div>
        </footer>
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
