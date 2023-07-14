import React from "react";
import { useState } from "react";
import './index.css'
import SupportClient from "..";

function SupportClientMain() {
    const SP1 = [{ name: 'Xem tuổi xây nhà', link: 'https://batdongsan.com.vn/ho-tro-tien-ich/ht-xem-tuoi-xay-nha', ImgURL: 'https://random.com.vn/blog/wp-content/uploads/2020/09/phong-thuy-02-1.jpg' }]
    const SP2 = [{ name: 'Chi phí làm nhà', link: 'https://batdongsan.com.vn/ho-tro-tien-ich/ht-du-toan-chi-tiet', ImgURL: 'https://tse2.mm.bing.net/th?id=OIP.TRgUKLuXu80EGvwIGLGLmgAAAA&pid=Api&P=0&h=180' }]
    const SP3 = [{ name: 'Tính lãi suất', link: 'https://batdongsan.com.vn/ho-tro-tien-ich/ht-tinh-lai-suat', ImgURL: 'https://tse3.mm.bing.net/th?id=OIP.SY8J7Zf2SOIzPWB87mezCAHaER&pid=Api&P=0&h=180' }]
    const SP4 = [{ name: 'Tư vấn phong thủy', link: 'https://batdongsan.com.vn/ho-tro-tien-ich/ht-xem-huong-nha', ImgURL: 'https://tse1.mm.bing.net/th?id=OIP.Ls3_DWF98un0KRVQSXO1jgHaFI&pid=Api&P=0&h=180' }]
    return (
        <div>
            <div className="headerSP">
                <h1 className="headerSP1">Hỗ trợ tiện ích</h1>
            </div>
            <div className="All_SP_Client">

                <div className="Main_pT1"> <SupportClient Imgelement={SP1}></SupportClient></div>
                <div className="Main_pT1"> <SupportClient Imgelement={SP2}></SupportClient></div>
                <div className="Main_pT1">  <SupportClient Imgelement={SP3}></SupportClient></div>
                <div className="Main_pT1"> <SupportClient Imgelement={SP4}></SupportClient></div>

            </div>
        </div>
    )
}

export default SupportClientMain