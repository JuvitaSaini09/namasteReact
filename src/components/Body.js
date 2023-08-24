import { IMG_CDN } from "../config";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

const RestaurantCard = ({ card }) => {
  const { cloudinaryImageId, name, cuisines, avgRating } = card;
  return (
    <div className="card">
      <img src={IMG_CDN + cloudinaryImageId} alt="card" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

const filterData = (searchText, restaurants) => {
  const filteredData = restaurants.filter((rest) =>
    rest.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
};

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [title, setTitle] = useState("title")
  console.log("render");

 
  
  // async function getRestaurants() {
  //   // const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5912716&lng=73.73890899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //   const response = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const jsonData = await response.json();
  //   setFilteredRestaurants(
  //     jsonData?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants
  //   );
  //   setAllRestaurants(
  //     jsonData?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants
  //   );

  //   //info.avgRating, info.cloudinaryImageId, info.cuisines, info.name
  // }

  // useEffect(getRestaurants, []);


  const abortController = new AbortController();
  const signal = abortController.signal;

  async function getRestaurants() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        { signal } // Pass the signal to the fetch to allow cancellation
      );
      const jsonData = await response.json();
      setFilteredRestaurants(
        jsonData?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setAllRestaurants(
        jsonData?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      // Handle any fetch errors here
    }
  }

  useEffect(() => {
    getRestaurants();

    // Cleanup function to cancel ongoing fetch if component unmounts
    return () => {
      abortController.abort();
    };
  }, []);





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
