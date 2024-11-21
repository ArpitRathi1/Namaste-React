import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const MealDetails = () => {
  // How to read a dynamic URL params
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  async function getMealInfo() {
    const data = await fetch(
      "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id 
    );
    const jsonData = await data.json();
    setMeal(jsonData.meals[0]);
    console.log(meal);
  }

  useEffect(() => {
    getMealInfo();
  }, []);

  return (!meal) ? (
    <Shimmer />
  ) : (
    <div>
      <h1>MealId : {id}</h1>
      <h1>Name : {meal.strMeal}</h1>
      <h2>Area : {meal.strArea}</h2>
      <h2>Category : {meal.strCategory}</h2>
      <h3>Instructions : {meal.strInstructions}</h3>
    </div>
  );
};

export default MealDetails;
