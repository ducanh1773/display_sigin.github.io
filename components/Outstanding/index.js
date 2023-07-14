import React from "react";
import Outstanding1 from './Oustanding2'
import './index.css'

function Main_Oustanding() {
    const OS1 = [{ ImgURL: '/img/os12.jpg', Status: 'Đang mở bán- 25/6/2023 : Mở bán', number: '5', link: 'https://batdongsan.com.vn/du-an-can-ho-chung-cu-thu-dau-mot-bd/the-maison-pj5449', location: 'Thủ Dầu Một - Bình Dương ', name: 'The Maison', acreage: '5.607,4 m' }]
    return (
        <div>
            <div className="headerOutstanding">
                <h1 className="headerOutstanding1">Dự án bất động sản nổi bật</h1>
               <div className="headerOutstanding3">
                <a className="headerOutstanding2"href="">Xem thêm</a>
                <i className="fa fa-arrow-right"></i>
                </div>
            </div>
            <div className="main_oustanding">
                <Outstanding1 Imgelement={OS1}></Outstanding1>
                <Outstanding1 Imgelement={OS1}></Outstanding1>
                <Outstanding1 Imgelement={OS1}></Outstanding1>
                <Outstanding1 Imgelement={OS1}></Outstanding1>
            </div>
        </div>
    )
}

export default Main_Oustanding;