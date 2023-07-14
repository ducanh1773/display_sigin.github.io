import React from "react";
import {Outstanding} from '../../Outstanding'
import { useState } from "react";
import './index.css'

function SupportClient(props){
    const Imgelement = props.Imgelement.map((t) => {
        return(
            <div className="MainPT">
               <a href={t.link} className="LinkPT">
                    <img className="imgPT" src={t.ImgURL}></img>
                    <p className="SubjectPT">{t.name}</p>
               </a>
            </div>
        )

    })
   

    return(
        <div>
            {Imgelement}
        </div>
    )
}

export default SupportClient;