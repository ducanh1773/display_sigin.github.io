import React from "react";
import { useState } from "react";
import './index.css'
import { Outstanding } from "../Outstanding1";

function Oustanding1(props) {
    const Imgelement = props.Imgelement.map((t) => {
        return (
            <div className="OustanMain">
                <div className="Oustanding_1">
                    <a className="Oustanding_2 " href={t.link}>

                        <div className="Oustanding_3">
                            <img className="Oustanding_4" src={t.ImgURL}></img>
                        </div>

                        <div className="Oustanding_5">
                            <i className="fa fa-image Outstanding"></i>
                            <p className="Outstanding">{t.number}</p>
                        </div>
                        <div className="Outstanding12">
                            <div className="Oustanding_6">
                                <p className="Outstanding11">{t.Status}</p>
                            </div>
                        </div>
                        <div className="Oustanding_7">
                            <p className="Outstanding13">{t.name}</p>
                            <p className="Outstanding14">{t.acreage}<sup>2</sup></p>
                            <p className="Outstanding15">{t.location}</p>
                        </div>

                    </a>
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

export default Oustanding1;