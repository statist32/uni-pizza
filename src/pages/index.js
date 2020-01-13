import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Button from "../components/Button"
import WelcomeText from "../components/WelcomeText"
import Food from "../components/Food"

const styles = {
  "button-wrapper": {
    display: "flex",
    justifyContent: "space-evenly",
    transform: "translateY(-50%)",
    marginBottom: "15vh",
  },
}
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <div style={styles["button-wrapper"]}>
      <Button preText={"Hier klicken zum"} text={"Bestellen"} />
      <Button preText={"Hier klicken zum"} text={"Anrufen"} />
    </div>
    <WelcomeText />
    <Food />
  </Layout>
)

export default IndexPage
