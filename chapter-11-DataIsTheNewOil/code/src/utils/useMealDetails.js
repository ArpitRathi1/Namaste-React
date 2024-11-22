import React, { useState, useEffect } from "react";
import { FETCH_MEAL_DETAILS_URL } from "../constants";

const useMealDetails = (id) => {
  const [meal, setMeal] = useState(null);
  // Get Data from API
  async function getMealInfo() {
    const data = await fetch(
      FETCH_MEAL_DETAILS_URL + id);
    const jsonData = await data.json();
    setMeal(jsonData.meals[0]);
    console.log(meal);
  }

  useEffect(() => {
    getMealInfo();
  }, []);
  // Return meal Details
  return meal  
};

export default useMealDetails;
