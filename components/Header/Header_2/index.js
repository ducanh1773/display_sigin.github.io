import React from "react";
import './index.css'
import { Reuse } from "../../Reuse";
function Header_2(props) {

    const Navi_Bar = props.NVB.map((t) => {
        return (
            <a className = 'link' href={t.link}> <div><p className="NaviBar1">{t.name}</p></div></a>
        )
    })

   
   


    return (
        <div className="nvBar2">
            <div>
                <p className="nvbar4"> {props.name} </p>
                <div className="nvBar3">
                    <div className="dropdown">{Navi_Bar}</div>
                </div>
            </div>
        </div>
    )
}

export default Header_2;