/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

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
        <footer id="footer">
          <div>
            <h2>Kontaktdaten</h2>
            <div className="footer-entry footer-contact-wrapper">
              <div>Telefon: {` `}</div>

              <a
                href="tel:05251-7778818"
                className="link"
                style={{ color: "inherit" }}
              >
                05251-7778818
              </a>
            </div>
            <div className="footer-entry footer-contact-wrapper">
              <div>Email: {` `}</div>

              <div>
                <a
                  href="mailto:unipizzapaderborn@gmail.com"
                  className="link"
                  style={{ color: "inherit" }}
                >
                  {" "}
                  unipizzapaderborn@gmail.com
                </a>
              </div>
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
        <div className="footer-after">
          <Link className="link" style={{ color: "inherit" }} to="/impressum">
            Impressum
          </Link>
          <Link className="link" style={{ color: "inherit" }} to="/datenschutz">
            Datenschutzerklärung
          </Link>
        </div>
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
