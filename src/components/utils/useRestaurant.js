import { useEffect, useState } from "react";
import { FETCH_MENU_URL1, FETCH_MENU_URL2 } from "../../config";

const useRestaurant = (id) => {
  //states
  const [restaurantDetail, setRestaurantDetail] = useState(null);
  const [recommendation, setRecommendation] = useState([]);

  //API call
  const getRestaurant = async () => {
    const response = await fetch(FETCH_MENU_URL1 + id + FETCH_MENU_URL2);

    const jsonResponse = await response.json();
    const restaurantDetail = jsonResponse.data;

    setRecommendation(
      restaurantDetail.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card
        .card.itemCards
    );

    setRestaurantDetail(restaurantDetail.cards[0].card.card.info);
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  //return
  return [restaurantDetail, recommendation];
};

export default useRestaurant;
