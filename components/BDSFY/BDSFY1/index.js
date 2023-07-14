import React from "react";
import './index.css'
import { BDSFY } from "../BDSFYRS";
import Tippy from "@tippyjs/react";

function BDSFY_1(props) {
    const ImgElement = props.information.map((t) => {
        return (
            <div className="Main_bdsfy">
                <div className="BDSfy_1">
                    <Tippy content={t.name}>
                        <a className='font_letter' href={t.link}>
                            <div className="BDSfy_image">
                                <img className="BDSfy_image_1" src={t.ImgURL}>

                                </img>
                            </div>
                            <div className="icon_bdsfy">
                                <div> <i className="fa fa-image"></i></div>
                                <div className="number_pic"><p>{t.number}</p></div>
                            </div>
                            <div className="BDS_FY2">
                                <p className="BDS_FY5">{t.name}</p>
                                <p className="BDS_FY6">{t.oscillate}<sup>2</sup></p>
                                <div><i class="fa fa-location-dot"></i><p className="BDS_FY4">{t.position}</p></div>
                                <div className="BDS_FY3">
                                    <div className="date_bdsfy2"><p className="date_bdsfy">{t.date}</p></div>
                                    <div className="icon_heart_bdsfy"><Tippy content='Bấm để lưu tin'><button className="icon_bds_fy_2"><i class="fa fa-heart icon_bds_fy"></i></button></Tippy></div>
                                </div>
                            </div>
                        </a>
                    </Tippy>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div>
                {ImgElement}
            </div>
        </div>
    )
}

export default BDSFY_1;