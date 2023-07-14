import React from "react";
export const Image_link = (props_1)=>{
    const {imgUrl , name} = props_1
    return (
        <div>
            {imgUrl} - {name} 
        </div>
    )
}