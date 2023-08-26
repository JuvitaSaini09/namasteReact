 const ShimmerUI=()=>{
    return (
        <div className="shimmer-ui-container" >
            {
                Array(15).fill(" ").map((e,index)=>{
                    return <div key={index} className="shimmer-ui"> </div>
                })
            }
            
        </div>
    )
}

export default ShimmerUI;