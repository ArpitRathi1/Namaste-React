import { useState, useEffect } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
import { filterData } from "../utils/helper"; 
import useOnline from "../utils/useOnline";

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
      console.log(json.meals);
      setFilteredMeals(json.meals);
      setAllMeals(json.meals);
    }
    fetchData();
  }, []);

  const isOnline = useOnline() 

  if (!isOnline) {
    return <h1>Offline, Plese check your internet connection !!</h1>
  }

  return allMeals?.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="h-11 p-3 rounded-md"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        ></input>
        <button
          className="p-2 m-2 bg-blue-500 hover:bg-blue-800 transition-all duration-200 text-white rounded-md"
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
      <div className="flex flex-wrap">
        {filteredMeals.length === 0 ? (
          <h1>Not Found</h1>
        ) : (
          filteredMeals.map((meal, index) => {
            return (
              <Link key={index} to={"/meal/" + meal.idMeal}>
                <Card {...meal}></Card>
              </Link>
            );
          })
        )}
      </div>
    </>
  );
}

export default Body;
