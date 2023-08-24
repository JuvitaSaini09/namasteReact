import { useEffect,useState } from "react";
import { useParams } from "react-router-dom"

const RestaurantMenu=()=>{
   const {id}=useParams();
   const [restaurantDetail,setRestaurantDetail]=useState({})

   

   useEffect(()=>{
    const getRestaurant=async ()=>{
        const response=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=23719&catalog_qa=undefined&submitAction=ENTER")

        const jsonResponse=await response.json();
        const restaurantDetail=jsonResponse.data.cards[0].card.card.info;
        console.log(restaurantDetail)
        setRestaurantDetail(restaurantDetail);
   }
   getRestaurant()
   },[])


    return (
        <div>
        <h1>Resturant id : {restaurantDetail.id}</h1>
        <h2>{restaurantDetail.name}</h2>
        <h2>{restaurantDetail.city}</h2>
          <h2>{restaurantDetail.cuisines}</h2>
          <h2>{restaurantDetail.costForTwoMessage}</h2>
        <h2>This is Restaurant Menu component</h2>
        </div>
    )
}

export default RestaurantMenu;