import { useParams } from "react-router-dom"

const RestaurantMenu=()=>{
   const {id}=useParams();


    return (
        <div>
        <h1>Resturant id : {id}</h1>
        <h2>This is Restaurant Menu component</h2>
        </div>
    )
}

export default RestaurantMenu;