import AFC_East from "./AFC_East"
import AFC_North from "./AFC_North"
import AFC_South from "./AFC_South"
import AFC_West from "./AFC_West"

const AFC = (props) => {
  return (
    <div className="afc">
      <h3> AFC East </h3><AFC_East />
      <h3> AFC North </h3><AFC_North />
      <h3> AFC South </h3><AFC_South />
      <h3> AFC West </h3><AFC_West />
    </div>
  )
}

export default AFC