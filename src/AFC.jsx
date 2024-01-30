import AFC_East from "./AFC_East"
import AFC_North from "./AFC_North"
import AFC_South from "./AFC_South"
import AFC_West from "./AFC_West"

const AFC = (props) => {
  return (
    <div>
      <AFC_East />
      <AFC_North />
      <AFC_South />
      <AFC_West />
    </div>
  )
}

export default AFC