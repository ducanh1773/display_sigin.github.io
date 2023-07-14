import React from "react";
export const Image_link = (props)=>{
    const {imgUrl , link} = props
    return (
        <div>
            {imgUrl} - {link} 
        </div>
    )
}