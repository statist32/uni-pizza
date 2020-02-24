import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Hero from "../components/Hero"
import Button from "../components/Button"
import WelcomeText from "../components/WelcomeText"
import Food from "../components/Food"
import Offers from "../components/Offers"

import "./Index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Hier finden Sie leckeres Essen" />
    <Hero />
    <div className="button-wrapper">
      <Button
        preText={"Hier klicken zum"}
        text={"Bestellen"}
        link="https://www.lieferando.de/uni-pizza"
      />

      <Button
        preText={"Hier klicken zum"}
        text={"Anrufen"}
        link="tel:05251-7778818"
      />
    </div>
    <WelcomeText />
    <Food />

    <Offers />
  </Layout>
)

export default IndexPage
