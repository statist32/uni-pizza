import React from "react"
import Salad from "./salad"
import Pasta from "./pasta"
import Pizza from "./pizza"

const styles = {
  "images-wrapper": {
    display: "flex",
    justifyContent: "space-evenly",
    width: "80%",
    margin: "auto",
  },
  "image-wrapper": {
    width: "20vw",
    height: "20vw",
    textAlign: "center",
    // height: "10px",
    // display: "flex",
    // flexFlow: "row nowrap",
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
        <Salad />
        <div style={styles.text}>Frischer Salat</div>
      </div>
      <div style={styles["image-wrapper"]}>
        <Pizza />
        <div style={styles.text}>Hausgemachte Pizza</div>
      </div>
      <div style={styles["image-wrapper"]}>
        <Pasta />
        <div style={styles.text}>Nudelgerichte mit hauseigenen Saucen</div>
      </div>
    </div>
  )
}
