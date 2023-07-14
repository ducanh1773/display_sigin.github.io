import React from "react";
import './index.css'

function option() {


    return (
        <div>
            <div className="scroll_option_sg">
                <div >
                    <div className="Option_sg_1"><i className="fa fa-key icon_option"></i><p className="Option_sg_6">Tất cả nhà đất</p><input type='checkbox' placeholder=""></input></div>
                    <div className="Option_sg_1"><i className="fa fa-key icon_option"></i> <p className="Option_sg_6">Căn hộ chung cư</p><input type='checkbox' placeholder=""></input></div>
                    <div className="Option_sg_2">
                        <div className="Option_sg_1 subject_1"><i className="fa fa-key icon_option"></i> <p className="Option_sg_6 ">Các loại nhà bán</p><input type='checkbox' placeholder=""></input></div>
                        <div className="Option_sg_3"><p className="Option_sg_6 Op_sg_7">Nhà riêng</p><input type='checkbox' placeholder=""></input></div>
                        <div className="Option_sg_3"><p className="Option_sg_6 Op_sg_7">Nhà biệt thự , liền kề</p><input type='checkbox' placeholder=""></input></div>
                        <div className="Option_sg_3"><p className="Option_sg_6 Op_sg_7">Nhà mặt phố</p><input type='checkbox' placeholder=""></input></div>
                        <div className="Option_sg_3"><p className="Option_sg_6 Op_sg_7">Shophouse , Nhà phố thương mại</p><input type='checkbox' placeholder=""></input></div>
                    </div>

                    <div className="Option_sg_5">
                        <div className="Option_sg_1 subject_1"><i className="fa fa-key icon_option"></i><p className="Option_sg_6">Các loại đất bán</p><input type='checkbox' placeholder=""></input></div>
                        <div className="Option_sg_3"><p className="Option_sg_6 Op_sg_7">Đất nền dự án</p><input type='checkbox' placeholder=""></input></div>
                        <div className="Option_sg_3"><p className="Option_sg_6 Op_sg_7">Bán đất</p><input type='checkbox' placeholder=""></input></div>
                    </div>

                    <div className="Option_sg_4">
                        <div className="Option_sg_1 subject_1"><i className="fa fa-key icon_option"></i><p className="Option_sg_6">Trang trại , khu nghỉ dưỡng </p><input type='checkbox' placeholder=""></input></div>
                        <div className="Option_sg_3"><p className="Option_sg_6 Op_sg_7">Codontel</p><input type='checkbox' placeholder=""></input></div>
                    </div>

                    <div className="Option_sg_1"><i className="fa fa-key icon_option"></i><p className="Option_sg_6">Kho , nhà xưởng</p><input type='checkbox' placeholder=""></input></div>
                    <div className="Option_sg_1"><i className="fa fa-key icon_option"></i><p className="Option_sg_6">Bất động sản khác</p><input type='checkbox' placeholder=""></input></div>
                </div>
            </div>
            <div className="Option_sg_7">
                <i className="fa fa-refresh icon_option_2 "></i>
                <p className="turn_back">Đặt lại</p>
                <div><button className="button_option">Áp dụng</button></div>
            </div>
        </div>
    )
}

export default option