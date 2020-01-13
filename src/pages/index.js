import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Button from "../components/Button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        transform: "translateY(-50%)",
      }}
    >
      <Button preText={"Hier klicken zum"} text={"Bestellen"} />
      <Button preText={"Hier klicken zum"} text={"Anrufen"} />
    </div>
  </Layout>
)

export default IndexPage
