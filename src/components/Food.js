import React from "react"
import Salad from "./salad"
import Pasta from "./pasta"
import Pizza from "./pizza"

const styles = {
  "images-wrapper": {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    width: "80%",
    margin: "auto",
  },
  "image-wrapper": {
    flex: "1 1 350px",
    width: "20vw",
    minHeight: "20vw",
    textAlign: "center",
    margin: "0 1.5rem",
    marginBottom: "3rem",
  },
  text: {
    textAlign: "center",
    marginTop: "1rem",
    fontSize: "1.3rem",
  },
}
export default function Food() {
  return (
    <div style={styles["images-wrapper"]}>
      <div style={styles["image-wrapper"]}>
        <Pizza />
        <div style={styles.text}>Hausgemachte Pizza</div>
      </div>
      <div style={styles["image-wrapper"]}>
        <Pasta />
        <div style={styles.text}>Nudelgerichte mit hauseigenen Saucen</div>
      </div>
      <div style={styles["image-wrapper"]}>
        <Salad />
        <div style={styles.text}>Frischer Salat</div>
      </div>
    </div>
  )
}
