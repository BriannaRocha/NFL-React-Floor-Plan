const Team = (props) => {
  return (
    <div className="team">
      Team: {props.name} <br /> From: {props.city}, {props.state}
    </div>
  )
}

export default Team