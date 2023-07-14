import React from "react";
import { useState } from "react";
import './index.css'
import BDS_DD from "./BDSdiadiem";

function BDS_DD_Main() {
    const DD1 = [{ link: 'https://batdongsan.com.vn/nha-dat-ban-ha-noi', name: 'Hà Nội', number: '49.055 tin đăng', ImgURL: '/img/bdsdd/hn1.png' }]
    const DD2 = [{ link: 'https://batdongsan.com.vn/nha-dat-ban-da-nang', name: 'Đà Nẵng', number: '4.835 tin đăng', ImgURL: '/img/bdsdd/danang.png' }]
    const DD3 = [{ link: 'https://batdongsan.com.vn/nha-dat-ban-da-nang', name: 'Bình Dương', number: '4.924 tin đăng', ImgURL: '/img/bdsdd/binhduong.png' }]
    const DD4 = [{ link: 'https://batdongsan.com.vn/nha-dat-ban-da-nang', name: 'Đồng Nai', number: '4.835 tin đăng', ImgURL: '/img/bdsdd/tpdn.jpg' }]
    return (
        <div>
            <div className="BDS_DD_Main1">
                <div>
                    <div>
                        <h1>Bất động sản theo địa điểm</h1>
                    </div>
                    <div className="BDS_DD_Main2">
                        <a className="BDS_DD_Main_link" href='https://batdongsan.com.vn/nha-dat-ban-tp-hcm' >
                            <div className="BDS_DD_IMG_Main">
                                <img src='/img/bdsdd/hcm_1.png' className="BDS_DD_IMG_1_Main"></img>
                            </div>
                            <div className="bds_dd_subject_Main">
                                <p className="bds_dd_subject_1_Main">Thành phố Hồ Chí Minh</p>
                                <p className="bds_dd_subject_2_Main">50.220 tin đăng</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="BDS_DD_Right">
                    <BDS_DD Imgelement={DD1}></BDS_DD>
                    <BDS_DD Imgelement={DD2}></BDS_DD>
                    <BDS_DD Imgelement={DD3}></BDS_DD>
                    <BDS_DD Imgelement={DD4}></BDS_DD>
                </div>

            </div>
            <div className="bt_dd_main">
                <div className="bt_dd1"><button className="bt_dd"><a href="" className="bt_dd2">Vinhomes Central Park</a></button></div>
                <div className="bt_dd1"><button className="bt_dd"><a href="" className="bt_dd2">Vinhomes grand park</a></button></div>
                <div className="bt_dd1"><button className="bt_dd"><a href=""  className="bt_dd2">Vinhomes smart city</a></button></div>
                <div className="bt_dd1"><button className="bt_dd"><a href=""  className="bt_dd2">vinhomes ocean park</a></button></div>
                <div className="bt_dd1"><button className="bt_dd"><a href=""  className="bt_dd2">vũng tàu pearl</a></button></div>
                <div className="bt_dd1"><button className="bt_dd"><a href=""  className="bt_dd2">bcons green view</a></button></div>
                <div className="bt_dd1"><button className="bt_dd"><a href=""  className="bt_dd2">grandeur palace</a></button></div>
            </div>
        </div>
    )
}

export default BDS_DD_Main;
