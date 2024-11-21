import { useState, useEffect } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"

function filterData(txt, meals) {
  const filterData = meals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(txt.toLowerCase())
  );
  return filterData;
}

function Body() {
  const [searchTxt, setSearchTxt] = useState("");
  const [allMeals, setAllMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // API call
      const data = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=indian"
      );
      const json = await data.json();
      setFilteredMeals(json.meals);
      setAllMeals(json.meals);
    }
    fetchData();
  }, []);

  // Conditional Rendering
  // If meals is empty => Shimmer UI
  // else => Actual data UI

  return allMeals?.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // Need to filter the data
            const data = filterData(searchTxt, allMeals);
            // Update the state - restraunts
            setFilteredMeals(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="Body">
        {filteredMeals.length === 0 ? (
          <h1>Not Found</h1>
        ) : (
          filteredMeals.map((meal, index) => {
            return (
              <Link key={index} to={"/meal/" + meal.idMeal}>
                <Card {...meal}></Card>;
              </Link>
            );
          })
        )}
      </div>
    </>
  );
}

export default Body;
