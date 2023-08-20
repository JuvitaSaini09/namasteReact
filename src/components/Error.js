import {useRouteError} from "react-router-dom";

const Error=()=>{
    const error=useRouteError();
    const {status,data,statusText}=error;
   

    return (
        
        <div>
        <h1 style={{color:"red"}}>{statusText}</h1>
        <h2 style={{color:"orange"}}>{status} Error !!</h2>
        <h3>{data}</h3>
        </div>
        
    )
}

export default Error;