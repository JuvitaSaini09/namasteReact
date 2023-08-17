 const ShimmerUI=()=>{
    return (
        <div class="shimmer-ui-container" >
            {
                Array(10).fill(" ").map((e,index)=>{
                    return <div key={index} className="shimmer-ui"> </div>
                })
            }
            
        </div>
    )
}

export default ShimmerUI;