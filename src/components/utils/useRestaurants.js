import {useState,useEffect} from 'react'

const useRestaurants=()=>{
    //states
 const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    //api call
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


    //return
    return [allRestaurants,filteredRestaurants,setFilteredRestaurants];
}

export default useRestaurants;