import React from "react"

const styles = {
  button: {
    backgroundColor: "rgb(255, 128, 0)",
    "text-decoration": "none",
    "text-decoration-style": "none",
    borderWidth: "0",
    borderRadius: "5px",
    height: "10vh",
    width: "30vh",
    fontSize: "2rem",
    color: "white",
  },
}

export default function Button({ preText, text }) {
  return (
    <div>
      <button style={styles.button}>
        <span style={{ fontSize: "1rem", display: "block" }}>{preText}</span>
        {text}
      </button>
    </div>
  )
}
