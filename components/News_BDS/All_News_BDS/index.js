import React from "react";
import './index.css'
import { useState } from 'react';
import News_BDS_1 from "../News_BDS_1";
function All_News_BDS() {
    const News_1 = [{ link_bds: '', name: 'Xếp hàng chờ môi giới thoát hộ suất đầu tư nhà đất tỉnh', imgUrl: '/img/tin1.png' }]
    const News_2 = [{ link_bds: '', name: 'chủ đầy tư BĐS bung hàng trở lại, giao dịch nhà đất có sớm "rã băng"?', imgUrl: '/img/tin2.jpg' }]
    const News_3 = [{ link_bds: '', name: 'nhiều dự án BĐS vùng ven thắng khi ưu tiên "đánh bắt sân nhà', imgUrl: '/img/tin3.jpg' }]
    const News_4 = [{ link_bds: '', name: 'chật vật thoát hàng vì lỡ mua căn hộ bình dương thời "đỉnh giá"', imgUrl: '/img/tin4.jpg' }]
    const News_5 = [{ link_bds: '', name: 'tìm hiêu đường giới đỏ vành đai 4 qua các quận huyện của hà nội', imgUrl: '/img/tin5.jpg' }]
    const News_6 = [{ link_bds: '', name: 'sau xây dựng trọn gói , viettel construction tham gia vào thị trường nội thất', imgUrl: '/img/tin6.webp' }]

    const [hoveredElement, setHoveredElement] = useState(true);
    const [hoveredElement1, setHoveredElement1] = useState(null);
    const [hoveredElement2, setHoveredElement2] = useState(null);
    const [hoveredElement3, setHoveredElement3] = useState(null);
    const [hoveredElement4, setHoveredElement4] = useState(null);
    const [hoveredElement5, setHoveredElement5] = useState(null);

    const handleMouseEnter = () => {
        setHoveredElement1(null);
        setHoveredElement2(null)
        setHoveredElement3(null)
        setHoveredElement4(null)
        setHoveredElement5(null)
        setHoveredElement(true);
    };
    const handleMouseEnter1 = () => {
        setHoveredElement(null)
        setHoveredElement1(true);
        setHoveredElement2(null)
        setHoveredElement3(null)
        setHoveredElement4(null)
        setHoveredElement5(null)
    };
    const handleMouseEnter2 = () => {
        setHoveredElement(null)
        setHoveredElement1(null);
        setHoveredElement3(null)
        setHoveredElement4(null)
        setHoveredElement5(null)
        setHoveredElement2(true);
    }; 
    
    const handleMouseEnter3 = () => {
        setHoveredElement2(null)
        setHoveredElement4(null)
        setHoveredElement5(null)
        setHoveredElement(null)
        setHoveredElement1(null);
        setHoveredElement3(true);
    }; const handleMouseEnter4 = () => {
        setHoveredElement4(true);
        setHoveredElement2(null)
        setHoveredElement5(null)
        setHoveredElement(null)
        setHoveredElement1(null);
        setHoveredElement3(null);
    }; const handleMouseEnter5 = () => {
        setHoveredElement2(null)
        setHoveredElement4(null)
        setHoveredElement5(true)
        setHoveredElement(null)
        setHoveredElement1(null);
        setHoveredElement3(null);
    };

    const handleMouseLeave = () => {
        setHoveredElement(null);
    }; const handleMouseLeave1 = () => {
        setHoveredElement1(null);
    }; const handleMouseLeave2 = () => {
        setHoveredElement2(null);
    }; const handleMouseLeave3 = () => {
        setHoveredElement3(null);
    }; const handleMouseLeave4 = () => {
        setHoveredElement4(null);
    };
    const handleMouseLeave5 = () => {
        setHoveredElement5(null);
    };

 

    return (
        <div className="All_page_news">
            <div className="News_1">
                <div className="n123">

                    {hoveredElement && (
                        <div>
                            <News_BDS_1 News={News_1}></News_BDS_1>
                        </div>
                    )}
                    {hoveredElement1 && (
                        <div>
                            <News_BDS_1 News={News_2}></News_BDS_1>
                        </div>

                    )}

                    {hoveredElement2 && (
                        <div>
                            <News_BDS_1 News={News_3}></News_BDS_1>
                        </div>
                    )}
                    {hoveredElement3 && (
                        <div>
                            <News_BDS_1 News={News_4}></News_BDS_1>
                        </div>
                    )}
                    {hoveredElement4 && (
                        <div>
                            <News_BDS_1 News={News_5}></News_BDS_1>
                        </div>
                    )}
                    {hoveredElement5 && (
                        <div>
                            <News_BDS_1 News={News_6}></News_BDS_1>
                        </div>
                    )}





                </div>

                <div className="n456">
                    <div onMouseEnter={() => handleMouseEnter()}><p>chủ đầu tư bất động sản bắt đầu bung hàng trở lại</p></div>
                    <div onMouseEnter={() => handleMouseEnter1()} ><p>chủ đầy tư BĐS bung hàng trở lại, giao dịch nhà đất có sớm "rã băng"?'</p></div>
                    <div onMouseEnter={() => handleMouseEnter2()} ><p>nhiều dự án BĐS vùng ven thắng khi uuw tiên "đánh bắt sân nhà</p></div>
                    <div onMouseEnter={() => handleMouseEnter3()} ><p>chật vật thoát hàng vì lỡ mua căn hộ bình dương thời "đỉnh giá"</p></div>
                    <div onMouseEnter={() => handleMouseEnter4()} ><p>tìm hiêu đường giới đỏ vành đai 4 qua các quận huyện của hà nội</p></div>
                    <div onMouseEnter={() => handleMouseEnter5()} ><p>sau xây dựng trọn gói , viettel construction tham gia vào thị trường nội thất</p></div>
                </div>
            </div>




        </div>
    )

}


export default All_News_BDS;