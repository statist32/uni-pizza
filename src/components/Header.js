import { Link } from "gatsby"
import React, { useState } from "react"
import "./Header.css"
import Logo from "./Logo"
import Hamburger from "./Hamburger"

export default function Header() {
  const [extended, setExtended] = useState(false)

  return (
    <header className={`${extended ? "hamburger-active-header" : ""}`}>
      <div>
        <div>
          <Link to="/" className="link">
            <div style={{ height: "50px", width: "50px" }}>
              <Logo />
            </div>
            <div>Uni Pizza</div>
          </Link>
        </div>

        <nav style={extended ? { display: "block" } : {}}>
          <Link className="link" to="/#hero">
            Home
          </Link>
          <a className="link" href="https://www.lieferando.de/uni-pizza">
            Speisekarte
          </a>
          <Link className="link" to="/#footer">
            Kontakt
          </Link>
        </nav>
        <Hamburger extended={extended} setExtended={setExtended} />
      </div>
    </header>
  )
}
