import React from "react";
import './index.css'

function Option_2() {

    return (
        <div className="Option_2_1">
            <div>
                <input type="number" min={0} max={99999}></input>
                <i className="fa fa-arrow-right"></i>
                <input type="number" min={0} max={99999}></input>
            </div>
            <div>
            
                
            </div>
            <div className="scroll_option_2">
                <div >
                    <div className="Option_2_2"><button className="Option_2_3">Tất cả các mức giá</button></div>
                    <div className="Option_2_2"><button className="Option_2_3">Dưới 500 triệu</button></div>
                    <div className="Option_2_2"><button className="Option_2_3">500-800 triệu</button></div>
                    <div className="Option_2_2"><button className="Option_2_3">800 triệu - 1 tỷ</button></div>
                    <div className="Option_2_2"><button className="Option_2_3">1 - 2 tỷ</button></div>
                    <div className="Option_2_2"><button className="Option_2_3">2 - 3 tỷ </button></div>
                    <div className="Option_2_2"><button className="Option_2_3"> 3- 5 tỷ</button></div>
                    <div className="Option_2_2"><button className="Option_2_3">5 - 7 tỷ</button></div>
                    <div className="Option_2_2"><button className="Option_2_3">7 - 10 tỷ</button></div>
                    <div className="Option_2_2"><button className="Option_2_3">10 - 20 tỷ</button></div>
                    <div className="Option_2_2"><button className="Option_2_3">20 - 30 tỷ</button></div>
                    <div className="Option_2_2"><button className="Option_2_3">30 - 40 tỷ</button></div>
                    <div className="Option_2_2"><button className="Option_2_3">40 - 60 tỷ</button></div>
                    <div className="Option_2_2"><button className="Option_2_3">Trên 60 tỷ</button></div>
                    <div className="Option_2_2"><button className="Option_2_3">Thỏa thuận</button></div>
                </div>
            </div>
            <div className="Option_sg_7">
                <i className="fa fa-refresh icon_option_2 "></i>
                <p className="turn_back_3">Đặt lại</p>
                <div><button className="button_option">Áp dụng</button></div>
            </div>
        </div>
    )
}

export default Option_2