import { Link } from "gatsby"
import React from "react"
import "./Header.css"
import logo from "../images/Pizza.png"

export default function header() {
  return (
    <header>
      <div>
        <div>
          <img src={logo} className="header-logo" />
          <div>Uni Pizza</div>
        </div>
        <nav>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/bestellen">
            Bestellen
          </Link>
          <Link className="link" to="/impressum">
            Impressum
          </Link>
        </nav>
      </div>
    </header>
  )
}
