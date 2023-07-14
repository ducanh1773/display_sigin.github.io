import React from "react";

export const BDSFY = (props) =>{
    const {ImgURL ,name ,link ,oscillate,position,number,date } = props

    return(
        <div>
            {ImgURL} - {name} - {link} -{oscillate}-{position}-{number}-{date}
        </div>
    )
}