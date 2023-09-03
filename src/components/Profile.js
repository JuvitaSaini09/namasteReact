import {useState,useEffect} from "react";

const Profile=(props)=>{
    const {name}=props;
    const [count,setCount]=useState(0);
    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log("useEffect set Interval");
        },1000)


        return()=>{
           clearInterval(timer)
    }
    }
    
    ,[])
    return (
        <div>
            <h1>Profile Functional component Page</h1>
            <h2>Name :{name}</h2>
            <p>Count : {count} </p>
            <button onClick={()=> setCount(1)}>SetCount</button>
        </div>
    )
}

export default Profile;