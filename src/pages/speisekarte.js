import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import "./speisekarte.css"
import Speisekarte1 from "../components/Speisekarte1"
import Speisekarte2 from "../components/Speisekarte2"
import Speisekarte3 from "../components/Speisekarte3"
import Speisekarte4 from "../components/Speisekarte4"
import Speisekarte5 from "../components/Speisekarte5"
import Speisekarte6 from "../components/Speisekarte6"
import Speisekarte7 from "../components/Speisekarte7"
import Speisekarte8 from "../components/Speisekarte8"

export default function Speisekarte() {
  return (
    <Layout>
      <SEO title="Unsere Speisekarte für Sie" />
      <section className="speisekarten-wrapper">
        <div>
          <h1>Speisekarte</h1>
          <section className="speisekarte-items-wrapper">
            <div className="speisekarte-item">
              <Speisekarte1 />
            </div>
            <div className="speisekarte-item">
              <Speisekarte2 />
            </div>
            <div className="speisekarte-item">
              <Speisekarte3 />
            </div>
            <div className="speisekarte-item">
              <Speisekarte4 />
            </div>
            <div className="speisekarte-item">
              <Speisekarte5 />
            </div>
            <div className="speisekarte-item">
              <Speisekarte6 />
            </div>
            <div className="speisekarte-item">
              <Speisekarte7 />
            </div>
            <div className="speisekarte-item">
              <Speisekarte8 />
            </div>
          </section>
        </div>
      </section>
    </Layout>
  )
}
