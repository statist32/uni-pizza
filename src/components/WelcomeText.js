import React from "react"
import "./WelcomeText.css"

const styles = {
  h2: { textAlign: "center", fontSize: "2.5rem" },
  p: { textAlign: "center", fontSize: "1.2rem" },
}

export default function WelcomeText() {
  return (
    <article className="welcome-text-wrapper">
      <h2>Wir liefern, was Sie suchen!</h2>
      <p>
        Egal ob entspannt Zuhause, gemütlich vor Ort oder als Partyservice.
        <br />
        Wir erfüllen alle Ihre Wünsche.
      </p>
    </article>
  )
}
