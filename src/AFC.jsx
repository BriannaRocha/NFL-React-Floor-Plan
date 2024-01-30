import AFC_East from "./AFC_East"
import AFC_North from "./AFC_North"
import AFC_South from "./AFC_South"
import AFC_West from "./AFC_West"

const AFC = (props) => {
  return (
    <div>
      AFC East <AFC_East />
      AFC North <AFC_North />
      AFC South <AFC_South />
      AFC West <AFC_West />
    </div>
  )
}

export default AFC