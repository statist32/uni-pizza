import React from "react"
import "./Hero.css"

import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "hero-pizza-2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.

      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          // backgroundColor={`#040e18`}
        >
          <section className="hero-wrapper" id="hero">
            <div className="hero-overlay">
              <h1>
                <div className="hero-welcome">Willkommen zu</div>
                <div className="hero-name">Uni Pizza</div>
                <div className="hero-desc">
                  Restaurant | Lieferdienst | Partyservice
                </div>
              </h1>
            </div>
          </section>
        </BackgroundImage>
      )
    }}
  />
)

export default function Hero() {
  return <BackgroundSection></BackgroundSection>
}
