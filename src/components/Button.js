import React from "react"

const styles = {
  button: {
    // backgroundColor: "rgb(255, 128, 0)",
    backgroundColor: "#009933",
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
    cursor: "pointer",
  },
}

export default function Button({ preText, text, link }) {
  return (
    <a href={link}>
      <button style={styles.button}>
        <span style={{ fontSize: "1.1rem", display: "block" }}>{preText}</span>
        {text}
      </button>
    </a>
  )
}
