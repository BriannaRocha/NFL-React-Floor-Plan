import NFC_East from "./NFC_East"
import NFC_North from "./NFC_North"
import NFC_South from "./NFC_South"
import NFC_West from "./NFC_West"

const NFC = (props) => {
  return (
    <div className="nfc">
      <h3> NFC East </h3><NFC_East />
      <h3> NFC North </h3><NFC_North />
      <h3> NFC South </h3><NFC_South />
      <h3> NFC West </h3><NFC_West />
    </div>
  )
}

export default NFC