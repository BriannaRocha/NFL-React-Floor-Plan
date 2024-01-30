import AFC from "./AFC"
import NFC from "./NFC"

function NFL() {
  return (
    <div className="division">
      <h2 className="nfc"> NFC </h2> <NFC />
      <h2 className="afc"> AFC </h2><AFC />
    </div>
  )
}

export default NFL