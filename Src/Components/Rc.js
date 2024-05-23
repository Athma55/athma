const Restaurant=(props)=>{
    const {name,cloudinaryImageId,cuisines,costForTwo,deliveryTime,avgRating}=props.data.info
    const img_url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
    return(
        <div className="res-card">
        <img className="res-img" src={img_url+cloudinaryImageId}/>
        <h3>{name}</h3>
        <p>{avgRating}</p>
        <p>{deliveryTime}</p>
        <p>{cuisines[0]}</p>
        <p>{costForTwo/100}</p>
    </div>   
    )

}

export default Restaurant