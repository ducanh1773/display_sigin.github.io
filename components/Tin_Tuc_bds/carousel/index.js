import React, { useState } from 'react';
import TinTuc from "../tintuc_bds1";
import './index.css'

const Carousel = () => {
  const [showButton, setShowbutton] = useState(true)
  const [showButton1, setShowbutton1] = useState(true)
  const [controlButton, setControlButton] = useState(0)
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [buttonDisabled1, setButtonDisabled1] = useState(false);


  const [currentIndex, setCurrentIndex] = useState(0);
  const TT1 = [{ number: '01', name: 'Những điểm sáng của thị trường bất động sản hà nội', ImgURL: 'https://img.iproperty.com.my/angel/610x342-crop/wp-content/uploads/sites/7/2023/07/Ong-Nguyen-Quoc-Anh_Pho-TGD-Batdongsan.com_.vn-trinh-bay-ve-Tong-quan-kinh-te-vi-mo-va-Thi-truong-BDS-scaled.jpg', link: 'https://batdongsan.com.vn/tin-tuc/nhung-diem-sang-an-tuong-cua-thi-truong-bds-ha-noi-cd-hn-772420' }]
  const TT2 = [{ number: '02', name: 'nhiều dự án BĐS vùng ven thắng khi ưu tiên đánh bắt sân nhà', ImgURL: '/img/tintuc/tt2.jpg', link: '' }]
  const TT3 = [{ number: '03', name: 'chật vật thoát hàng vì lỡ mua căn hộ bình dương thời "Đỉnh giá"', ImgURL: '/img/tintuc/tt3.jpg', link: '' }]
  const TT4 = [{ number: '04', name: 'cách tính chi phí xây dựng biệt thự 2 tầng năm 2023', ImgURL: '/img/tintuc/tt3.jpg', link: '' }]
  const TT5 = [{ number: '05', name: 'Nghị định 35 đang làm ấm thị trường đát nền nam định', ImgURL: '/img/bdsfy/BDSFY4.jpg', link: '' }]
  const TT6 = [{ number: '06', name: 'tìm hiểu chỉ giới đường đỏ vành đai 4 qua các quận, huyện của hà nội', ImgURL: '/img/tintuc/tt3.jpg', link: '' }]
  const elements = [<TinTuc Imgelement={TT1}></TinTuc>, <TinTuc Imgelement={TT2}></TinTuc>, <TinTuc Imgelement={TT3}></TinTuc>, <TinTuc Imgelement={TT4}></TinTuc>, <TinTuc Imgelement={TT5}></TinTuc>, <TinTuc Imgelement={TT6}></TinTuc>];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0: prevIndex - 1));

  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === elements.length - 3 ? elements.length-3 : prevIndex + 1));


  };

  return (
    <div>
      <div className='Tin_tuc_header1'>
        <h1 className='Tin_tuc_header'>
          Tin tức bất động sản
        </h1>
      </div>

    <div className='carousel'>
      <button className='button_tintuc' onClick={handlePrev} disabled={buttonDisabled}><i className='fa fa-arrow-left button_tintuc1'></i></button>
      <div className='carousel1'>
        {elements.slice(currentIndex, currentIndex + 3).map((elements, index) => (
          <div key={index}>{elements}</div>
        ))}
      </div>
      <button className='button_tintuc' onClick={handleNext} disabled={buttonDisabled1}><i className='fa fa-arrow-right button_tintuc1'></i></button>
    </div>
    </div>

  );
  console.log(currentIndex)
  console.log(controlButton);
  console.log(1)

};


export default Carousel;