import Restaurant from "./Rc"

const Body=()=>{
    const resList=[ 
        {
           info: {    
                id : "334475",
                name: "paradise",
                cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
                cuisines : ["Burgers","Biryani", "American", "Snacks"],
                costForTwo: 40000,
                deliveryTime : 36,
                avgRating : "3.8"
            }
        },
        {
            info: {    
                id : "334476",
                name: "Eat panchavat",
                cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
                cuisines : ["Burgers","Biryani", "American", "Snacks"],
                costForTwo: 40000,
                deliveryTime : 20,
                avgRating : "4.3"
            }
        },
        {
            info: {    
                id : "334477",
                name: "Dominos",
                cloudinaryImageId: "az9ex7bhar9uwg5yhcdm",
                cuisines : ["Burgers","Biryani", "American", "Snacks"],
                costForTwo: 40000,
                deliveryTime : 40,
                avgRating : "4.4"
            }
        },
        {
            info: {    
                id : "334478",
                name: "kritunga",
                cloudinaryImageId: "69a061b7e0f951cef2b4947946f94ec6",
                cuisines : ["Burgers","Biryani", "American", "Snacks"],
                costForTwo: 40000,
                deliveryTime : 40,
                avgRating : "3.9"
            }
        },
        {
            info: {    
                id : "334479",
                name: "Suprabhat",
                cloudinaryImageId: "g1arzw6qd7g9affkmgzk",
                cuisines : ["Burgers","Biryani", "American", "Snacks"],
                costForTwo: 40000,
                deliveryTime : 40,
                avgRating : "3.5"
            }
        }]

    return(
        <div className="body">
            {
                resList.map(each=><Restaurant key={each.info.id} data={each}/>)
            }
        </div>
    )
}

export default Body