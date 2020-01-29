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
          <div style={{ height: "50px", width: "50px" }}>
            <Logo />
          </div>
          <div>Uni Pizza</div>
        </div>

        <nav style={extended ? { display: "block" } : {}}>
          <Link className="link" to="/#hero">
            Home
          </Link>
          <Link className="link" to="/speisekarte">
            Speisekarte
          </Link>
          <Link className="link" to="/#footer">
            Kontakt
          </Link>
        </nav>
        <Hamburger extended={extended} setExtended={setExtended} />
      </div>
    </header>
  )
}
