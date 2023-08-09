import { restaurantList,IMG_CDN } from "../config";
import {useState,useEffect} from "react";


const RestaurantCard = ({card}) => {

   const {cloudinaryImageId,name,cuisines,avgRating}=card;
  return (
    <div className="card">
       <img src={IMG_CDN+cloudinaryImageId} alt="card" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4> 
    </div>
  );
};

const filterData=(searchText,restaurants)=>{
   const filteredData=restaurants.filter(rest=>rest.name.includes(searchText));
   return filteredData;
}





const Body = () => {
    const [restaurants,setRestaurants]=useState(restaurantList);
    const [searchText,setSearchText]=useState("");
    const [title,setTitle]=useState("title");
    console.log("render");


    async function getRestaurants(){
  // const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5912716&lng=73.73890899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const jsonData=await response.json();
  setRestaurants(jsonData?.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

//info.avgRating, info.cloudinaryImageId, info.cuisines, info.name


}

    useEffect(getRestaurants,[searchText])
  return (

    <div>
        <input type="text" className="search-restaurant" placeholder="Search Restaurant" value={searchText}
        onChange={e=>setSearchText(e.target.value)}
        >
        </input><button onClick={()=>{
          const data=filterData(searchText,restaurants);
          setRestaurants(data);
        }}>Search</button>
        <button onClick={()=>setTitle("newTitle")}>Update title</button>
        <h1>{title}</h1>
    <div className="card-container">

        {
            restaurants.map(restaurant=><RestaurantCard card={restaurant.info} />)
        }

    
    </div>
    </div>
  );
};

export default Body;