import Team from "./Team"


const NFC_East = (props) => {
  return (
    <div>
      <Team name={"Dallas Cowboys"} city={"Dallas"} state={"Texas"} />
      <Team name={"Philadelphia Eagles"} city={"Philadelphia"} state={"Pennsylvania"} />
      <Team name={"New York Giants"} city={"East Rutherford"} state={"New Jersey"} />
      <Team name={"Washington Commanders"} city={"Washington "} state={"D.C."} />
    </div>
  )
}

export default NFC_East