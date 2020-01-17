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
        <Hamburger extended={extended} setExtended={setExtended} />
      </div>
    </header>
  )
}
