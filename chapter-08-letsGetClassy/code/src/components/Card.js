const RestrauntCard = ({strMealThumb, strMeal}) => {
    return (
      <div className="card">
        <img src={strMealThumb}></img>
        <h2>{strMeal}</h2>
      </div>
    )
}

export default RestrauntCard