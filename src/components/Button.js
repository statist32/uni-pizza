import React from "react"

const styles = {
  button: {
    // backgroundColor: "rgb(255, 128, 0)",
    backgroundColor: "rgba(28, 184, 6, 1)",
    textDecoration: "none",
    textDecorationStyle: "none",
    borderWidth: "0",
    borderRadius: "5px",
    height: "10vh",
    width: "30vh",
    fontSize: "2rem",
    color: "white",
    // lazy bos styles inner
    margin: "1rem",
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
