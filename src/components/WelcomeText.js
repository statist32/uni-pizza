import React from "react"

const styles = {
  article: {
    marginBottom: "6rem",
  },
  h2: { textAlign: "center", fontSize: "2.5rem" },
  p: { textAlign: "center", fontSize: "1.2rem" },
}

export default function WelcomeText() {
  return (
    <article style={styles.article}>
      <h2 style={styles.h2}>Wir liefern, was Sie suchen!</h2>
      <p style={styles.p}>
        Egal ob entspannt Zuhause, gemütlich vor Ort oder als Partyservice.
        <br />
        Wir bieten Ihnen Qualität
      </p>
    </article>
  )
}
