import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Button from "../components/Button"
import WelcomeText from "../components/WelcomeText"
import Food from "../components/Food"
import OpeningTime from "../components/OpeningTime"
import Offers from "../components/Offers"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <div className="button-wrapper">
      <Button preText={"Hier klicken zum"} text={"Bestellen"} />
      <Button preText={"Hier klicken zum"} text={"Anrufen"} />
    </div>
    <WelcomeText />
    <Food />

    {/* <Offers /> */}
  </Layout>
)

export default IndexPage
