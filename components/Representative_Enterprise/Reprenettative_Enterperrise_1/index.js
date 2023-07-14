import React from "react";
import { useState } from "react";
import { Outstanding } from "../../Outstanding/Outstanding1";
import './index.css'

function Representative(props) {
    const Imgelement = props.Imgelement.map((t) => {
        
        return (
            <div>
                <a href={t.link}>
                    <div>
                        <img src={t.ImgURL} className="img_dnTB"></img>
                    </div>
                </a>
            </div>
        )
    })

    return (
        <div>
            {Imgelement}
        </div>
    )

}

export default Representative;