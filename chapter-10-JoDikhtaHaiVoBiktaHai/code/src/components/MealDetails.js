import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useMealDetails from "../utils/useMealDetails";

const MealDetails = () => {
  const { id } = useParams();

  const meal = useMealDetails(id)

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
