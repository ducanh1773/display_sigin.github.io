import React from "react";
import './index.css'
import { useState } from "react";
import { Outstanding } from "../../Outstanding/Outstanding1";


function BDS_DD(props) {
    const Imgelement = props.Imgelement.map((t) => {
        return (
            <div>
                <div>
                    <a href={t.link} className="BDS_DD_link">
                        <div className="BDS_DD_IMG">
                            <img src={t.ImgURL} className="BDS_DD_IMG_1"></img>
                        </div>
                        <div className="bds_dd_subject">
                            <p className="bds_dd_subject_1">{t.name}</p>
                            <p className="bds_dd_subject_2">{t.number}</p>
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

export default BDS_DD;