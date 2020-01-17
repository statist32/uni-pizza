import { Link } from "gatsby"
import React, { useState } from "react"
import "./Header.css"
import Logo from "./Logo"

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

        <nav className={`${extended ? "hamburger-active-nav" : ""}`}>
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
        <div
          className="header-hamburger"
          onClick={() => {
            setExtended(!extended)
            console.log(extended)
          }}
        >
          X
        </div>
      </div>
    </header>
  )
}
