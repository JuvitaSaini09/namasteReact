import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../config";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState(null);
  const [recommendation, setRecommendation] = useState([]);

  useEffect(() => {
    const getRestaurant = async () => {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=" +
          id +
          "&catalog_qa=undefined&submitAction=ENTER"
      );

      const jsonResponse = await response.json();
      const restaurantDetail = jsonResponse.data;

      setRecommendation(
        restaurantDetail.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card
          .card.itemCards
      );
      
      setRestaurantDetail(restaurantDetail.cards[0].card.card.info);
    };
    getRestaurant();
  }, []);

  

  return (!restaurantDetail)?<ShimmerUI /> :(
    <div className="menu">
      <div>
        <h1>Resturant id : {restaurantDetail.id}</h1>
        <img src={IMG_CDN + restaurantDetail.cloudinaryImageId} />
        <h3>{restaurantDetail.avgRating} rating</h3>
        <h2>{restaurantDetail.name}</h2>
        <h2>{restaurantDetail.city}</h2>
        <h2>{restaurantDetail.cuisines}</h2>
        <h2>{restaurantDetail.costForTwoMessage}</h2>
        <h3>Area : {restaurantDetail.areaName}</h3>
      </div>

      <div>
        <h1>Recommendation</h1>
        <ul>
          {recommendation.map(({ card }) => {
            return <li key={card.info.id}>{card.info.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
