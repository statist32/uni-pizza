import React from "react"

const styles = {
  dailyOffer: {},
  day: {},
  offer: {},
  disclaimer: {},
}

export default function Offers() {
  return (
    <div>
      <div style={styles.dailyOffer}>
        <span style={styles.day}>Mittagsangebot 11 - 14 Uhr</span>
        <span style={styles.offer}>
          Jede 28er Pizza und jedes Nudelgericht für nur 5,50€
        </span>
      </div>
      <div style={styles.dailyOffer}>
        <span style={styles.day}>Dienstag</span>
        <span style={styles.offer}>Jede 28er Pizza 1€ günstiger</span>
      </div>
      <div style={styles.dailyOffer}>
        <span style={styles.day}>Mittwoch</span>
        <span style={styles.offer}>Alle Schnitzelgerichte 1€ günstiger</span>
      </div>
      <div style={styles.dailyOffer}>
        <span style={styles.day}>Donnerstag</span>
        <span style={styles.offer}> Alle Salate und Döner 1€ günstiger</span>
      </div>
      <div style={styles.dailyOffer}>
        <span style={styles.day}>Freitag</span>
        <span style={styles.offer}>Jede 60er Pizza 3€ günstiger</span>
      </div>

      <div style={styles.disclaimer}>
        <span>Angabote gelten nicht an Feiertagen.</span>
        <span>Änderungen vorbehalten</span>
      </div>
    </div>
  )
}
