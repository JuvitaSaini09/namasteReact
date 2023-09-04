import { IMG_CDN } from "../config";
import { useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";
import useRestaurants from "./utils/useRestaurants";
import useOnline from "./utils/useOnline"

const RestaurantCard = ({ card }) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = card;
  return (
    <Link to={"/restaurant/" + card.id} key={card.id}>
      <div className="card">
        <img src={IMG_CDN + cloudinaryImageId} alt="card" />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} stars</h4>
      </div>
    </Link>
  );
};

const Body = () => {
  const [allRestaurants, filteredRestaurants] = useRestaurants(); //useRestaurants return array
  const [searchText, setSearchText] = useState("");
  const [title, setTitle] = useState("title");

  const isOnline=useOnline();
  
  if(!isOnline) return <h1 style={{color:"red"}}>OOPS!! Check your internet connection !!</h1>

  if (!allRestaurants) return null; // stop render (This is Called as Early return)

  return allRestaurants.length == 0 ? (
    <ShimmerUI />
  ) : (
    <div>
      <input
        type="text"
        className="search-restaurant"
        placeholder="Search Restaurant"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button
        onClick={() => {
          const data = filterData(searchText, allRestaurants);
          setFilteredRestaurants(data);
        }}
      >
        Search
      </button>
      <button onClick={() => setTitle("newTitle")}>Update title</button>
      <h1>{title}</h1>
      <div className="card-container">
        {/* {filteredRestaurants.map((restaurant) => (
          <RestaurantCard card={restaurant.info} />
        ))} */}

        {filteredRestaurants.length == 0 ? (
          <h1>No Restaurant Found !!</h1>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard card={restaurant.info} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
