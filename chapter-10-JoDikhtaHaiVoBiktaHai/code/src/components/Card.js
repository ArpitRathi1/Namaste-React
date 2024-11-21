const RestrauntCard = ({strMealThumb, strMeal}) => {
    return (
      <div className="w-[200px] shadow-lg bg-pink-50 p-3 m-3">
        <img src={strMealThumb} className="w-full"></img>
        <h2 className="font-bold text-xl">{strMeal}</h2>
      </div>
    )
}

export default RestrauntCard