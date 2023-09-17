 import React from "react";

 const News=({title,img,date})=>{
    return(
        <div className="border-2 rounded-xl">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="font-semibold p-3">
                <h1>{title}</h1>
            </div>
            <div className="p-3 text-gray-500">
                <p>{date}</p>
            </div>
        </div>
    )
 }
 export default News