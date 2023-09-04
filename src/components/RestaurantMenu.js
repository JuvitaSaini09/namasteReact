import { useParams } from "react-router-dom";
import { IMG_CDN } from "../config";
import ShimmerUI from "./ShimmerUI";
import useRestaurant from "./utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantDetail, recommendation] = useRestaurant(id);

  return !restaurantDetail ? (
    <ShimmerUI />
  ) : (
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
