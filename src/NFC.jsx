import NFC_East from "./NFC_East"
import NFC_North from "./NFC_North"
import NFC_South from "./NFC_South"
import NFC_West from "./NFC_West"

const NFC = (props) => {
  return (
    <div>
      <NFC_East />
      <NFC_North />
      <NFC_South />
      <NFC_West />
    </div>
  )
}

export default NFC