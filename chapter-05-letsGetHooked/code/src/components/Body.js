// Named import
import { useState } from "react";
import { restrauntList } from "../constants";
import RestrauntCard from "./RestrauntCard";

function filterData(txt, restraunts){
  const filterData = restraunts.filter((restraunt) => restraunt.name.includes(txt));
  return filterData
}


function Body() {
  // searchTxt is a local state variable
  const [searchTxt, setSearchTxt] = useState("");
  const [restraunts, setRestraunts] = useState(restrauntList);

  return (
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
            const data = filterData(searchTxt, restraunts)
            // Update the state - restraunts
            setRestraunts(data)
          }}
        >Search</button>
      </div>
      <div className="Body">
        {restraunts.map((restraunt, index) => {
          return <RestrauntCard key={index} {...restraunt}></RestrauntCard>;
        })}
      </div>
    </>
  );
}

export default Body;
