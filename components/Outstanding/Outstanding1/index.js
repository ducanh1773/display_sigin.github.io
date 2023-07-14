import React from "react";

export const Outstanding  = (props) =>{
    const{ImgURL , Status , Name , acreage , location , link  , number} = props
    return(
        <div>
            {ImgURL} - {Status} - {Name} - { acreage} -{location}
        </div> 
    )
}