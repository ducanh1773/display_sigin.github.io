import React from "react";
import { useState } from "react";
import "./index.css"
import Option from './option/Option_1'
import Option_2 from "./option/Option_2";
import Option_3 from "./option/Option_3";
import Option_4 from "./option/Option_4";
import Tippy from "@tippyjs/react";


const names = [
    'sdghashdgasdgash',
    'asdhbashdghasdgasdjhg',
    'asdfasdfasdfasdfas'
]
function SearchEngine_2() {



    const [showDropdown, setShowdropdown] = useState(false);


    const [placeholeder, setplaceholder] = useState('Dự án Ecopark');
   


    React.useEffect(() => {
        console.log(`initializing interval`);
        const interval = setInterval(() => {
               if(placeholeder =='Dự án Ecopark'){
                    setplaceholder('Đường Nguyễn Thị Minh Khai')
               }else if(placeholeder == 'Đường Nguyễn Thị Minh Khai'){
                    setplaceholder('Đường Láng')
               }else {
                setplaceholder('Dự án Ecopark')
               }

        }, 4000);

        return () => {
            console.log(`clearing interval`);
            clearInterval(interval);
        };
    }, [placeholeder]);







    const setShowdropdown_1 = () => {
        setShowdropdown_1_1(false)
        setShowdropdown_2_2(false)
        setShowdropdown_3_3(false)
        setShowdropdown(!showDropdown)

    }

    const [showDropdown_1, setShowdropdown_1_1] = useState(false)

    const setShowdropdown5 = () => {
        setShowdropdown_2_2(false)
        setShowdropdown_3_3(false)
        setShowdropdown(false)
        setShowdropdown_1_1(!showDropdown_1)

    }

    const [showDropdown_2, setShowdropdown_2_2] = useState(false)

    const setShowdropdown6 = () => {

        setShowdropdown_3_3(false)
        setShowdropdown(false)
        setShowdropdown_1_1(false)
        setShowdropdown_2_2(!showDropdown_2)

    }

    const [showDropdown_3, setShowdropdown_3_3] = useState(false)

    const setShowdropdown_4 = () => {

        setShowdropdown(false)
        setShowdropdown_1_1(false)
        setShowdropdown_2_2(false)
        setShowdropdown_3_3(!showDropdown_3)

    }








    return (
        <div className="backgr_search">
            <div className="nava_search_2" >
                <div className="nava_search">
                    <i className="fa fa-key icon_search_1"></i>
                    <p className="loai_nd">Loại nhà đất</p>
                    <i className="fa fa-arrow-down icon_search "></i>
                </div>

                <div className="search_button">
                    <div className="input_search1"><input type='text' className="input_search" placeholder={placeholeder}  ></input>
                    </div>
                    <div className="btn_sg"><div className="bt_sg_3"><button className=" bt_sg_2"><i className="fa fa-search"> Tìm kiếm</i></button></div></div>
                </div>
            </div>


            <div className="option">
                <div className="option_sg_padding" ><div className="option_123" ><button className="bt_sg-1" onClick={setShowdropdown_1}> <p className="text_sg">Trên toàn quốc</p>  <i className="fa fa-arrow-down icon_sg"></i></button></div>
                    {showDropdown && (
                        <div className="All_option1">
                            <Option></Option>
                        </div>
                    )}</div>

                <div className="option_sg_padding"><div className="option_123"><button className="bt_sg-1" onClick={setShowdropdown5}> <p className="text_sg">Mức giá</p> <i className="fa fa-arrow-down icon_sg"></i></button></div>
                    {showDropdown_1 && (
                        <div className="All_option1">
                            <Option_2></Option_2>
                        </div>
                    )}
                </div>

                <div className="option_sg_padding"><div className="option_123"><button className="bt_sg-1" onClick={setShowdropdown6}> <p className="text_sg">Diện tích</p> <i className="fa fa-arrow-down icon_sg"></i></button></div>
                    {showDropdown_2 && (
                        <div className="All_option1">
                            <Option_3></Option_3>
                        </div>
                    )}
                </div>
                <div className="option_sg_padding"><div className="option_123"><button className="bt_sg-1" onClick={setShowdropdown_4}> <p className="text_sg">Lọc thêm</p> <i className="fa fa-arrow-down icon_sg "></i></button></div>
                    {showDropdown_3 && (
                        <div className="All_option1">
                            <Option_4></Option_4>
                        </div>
                    )}
                </div>
                <button className="refresh"><i className="fa fa-refresh icon_sg"></i></button>
            </div>

        </div>
    )
}

export default SearchEngine_2;