import React from "react";
import { Outstanding } from "../../Outstanding/Outstanding1";
import './index.css'
import { useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';

function TinTuc(props) {
    const Imgelement = props.Imgelement.map((t) => {
        
        return (

            <div className="TinTucMain">
                <a href={t.link} className="TinTuclink">
                    <div className="TinTuc_img">
                        <img className="TinTuc_img1" src={t.ImgURL}></img>
                    </div>
                </a>
                <div className="TinTuc1">
                    <p className="TinTuc2">{t.number}</p>
                    <a href={t.link} className="TinTuclink"><p className="TinTuc3">{t.name}</p></a>
                </div>


            </div>
        )
    })

    return (
        <div>
            {Imgelement}
        </div>
    )
}
export default TinTuc;
