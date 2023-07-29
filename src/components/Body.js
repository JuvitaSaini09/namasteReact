import { restaurantList,IMG_CDN } from "../config";
import {useState} from "react";


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



const Body = () => {
    const [searchText,setSearchText]=useState("");
  return (

    <div>
        <input type="text" className="search-restaurant" placeholder="Search Restaurant" value={searchText}
        onChange={e=>setSearchText(e.target.value)}
        >
        </input>
    <div className="card-container">

        {
            restaurantList.map(restaurant=><RestaurantCard card={restaurant} />)
        }

    
    </div>
    </div>
  );
};

export default Body;