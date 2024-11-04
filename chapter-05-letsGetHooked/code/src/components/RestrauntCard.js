const RestrauntCard = ({name, image, tag, star}) => {
    return (
      <div className="card">
        <img src={image}></img>
        <h2>{name}</h2>
        <h3>{tag.join(", ")}</h3>
        <h4>{star} stars</h4>
      </div>
    )
}

export default RestrauntCard