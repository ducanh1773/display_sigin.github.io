import React from "react";
import './index.css'

function Option_4() {

    return (
        <div >
            <div className="otp_4">
                <div className="opt_4_1">
                    <div><p className="font_opt">Số phòng ngủ</p></div>
                    <div className="opt_4_4">
                        <div className="opt_4_6"><button className="opt_4_5">1</button></div>
                        <div className="opt_4_6"><button className="opt_4_5">2</button></div>
                        <div className="opt_4_6"><button className="opt_4_5">3</button></div>
                        <div className="opt_4_6"><button className="opt_4_5">4</button></div>
                        <div className="opt_4_6"><button className="opt_4_5">5</button></div>
                    </div>
                </div>
                <div>
                    <div className="opt_4_1"><p className="font_opt">Hướng</p></div>
                    <div className="opt_4_1_2">
                        <div className="opt_4_6"><button className="opt_4_7">Đông</button></div>
                        <div className="opt_4_6"><button className="opt_4_7">Tây</button></div>
                        <div className="opt_4_6"><button className="opt_4_7">Nam</button></div>
                        <div className="opt_4_6"><button className="opt_4_7">Bắc</button></div>
                    </div>
                    <div className="opt_4_1_8 ">
                        <div className="opt_4_6"><button className="opt_4_7">Đông-Bắc</button></div>
                        <div className="opt_4_6"><button className="opt_4_7">Tây-Bắc</button></div>
                        <div className="opt_4_6"><button className="opt_4_7">Tây-Nam</button></div>
                    </div>
                    <div className="opt_4_9">
                        <div ><button className="opt_4_7">Đông-Nam</button></div>
                    </div>
                </div>
                <div className="opt_4_3 opt_4_1">
                    <div><p className="font_opt">Nội dung tin có</p></div>
                    <div className="opt_10">
                        <div className="opt_4_6"><button  className="opt_4_7">Hình ảnh</button></div>
                        <div className="opt_4_6"><button  className="opt_4_7">Video</button></div>
                        <div className="opt_4_6"><button  className="opt_4_7">3D&360<sup>o</sup></button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Option_4;