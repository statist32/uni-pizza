/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import "./layout.css"

const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    width: "60%",
    color: "white",
    margin: "7rem auto",
    lineHeight: "2.5rem",
    fontSize: "1.5rem",
  },
}

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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={{}}>
        <main>{children}</main>
        <footer style={styles.footer}>
          <div>
            <div>Telefon: 05251-7778818 </div>
            <div>Email: uni-pizza@gmail.com </div>
          </div>
          <div>
            Stephanusstr. 48 <br />
            33098 Paderborn
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
