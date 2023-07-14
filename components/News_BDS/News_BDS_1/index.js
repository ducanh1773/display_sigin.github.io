import React from "react";
import './index.css'
import { Reuse_News } from '../Reuse_News'


function News_BDS_1(props) {
    const ImgElement = props.News.map((t) => {
        return (
            <div className="Tin_nổi_bật">
                <a href={t.link_bds}><img className="img_bds" src={t.imgUrl}></img></a>
                <a href={t.link_bds} className="LinkSubjectNews"><div><p className="Subject_News">{t.name}</p></div></a>
            </div>
        )
    })
    return (
        <div className="AllNews">
            <div>
                {ImgElement}
            </div>
        </div>
    )
}

export default News_BDS_1;