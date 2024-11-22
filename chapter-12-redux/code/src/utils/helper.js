export function filterData(txt, meals) {
    const filterData = meals.filter((meal) =>
      meal.strMeal.toLowerCase().includes(txt.toLowerCase())
    );
    return filterData;
}