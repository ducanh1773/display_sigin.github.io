import React from "react";
import "./index.css"

function SearchEngine3() {


    return (

        <div className="search_bds_da_3">
            <div className="search_bds_da">
                <button className="search_bds_da_2">
                    <i className="fa fa-key icon_da"></i>
                    <p className="">Loại hình</p>
                    <i className="fa fa-arrow-down icon_da_2"></i>
                </button>
                <div className="search_da_bds">
                    <div className="search_da_bds_3"><input placeholder="Tìm nhanh . VD:Vinhomes Central Park " className="search_da_bds_2"></input></div>
                    <button className="btn-da">
                        <i className="fa fa-search"></i>
                        <span className=".btn-da_2">Tìm kiếm</span>
                    </button>
                </div>
            </div>

            <div className="option_bds_da">
                <div className="option_da_bds-3"><div className="option_da_bds"><button className="option_da_bds-2">Trên toàn quốc</button> <i className="fa fa-arrow-down icon_bds_da"></i></div></div>
                <div className="option_da_bds-3"><div className="option_da_bds"><button className="option_da_bds-2">Mức giá</button> <i className="fa fa-arrow-down icon_bds_da"></i> </div></div>
                <div className="option_da_bds-3"><div className="option_da_bds"><button className="option_da_bds-2"> Trạng thái</button> <i className="fa fa-arrow-down icon_bds_da"></i> </div></div>
                <i className="fa fa-refresh icon_bds_da"></i>
            </div>
        </div>


    )
}

export default SearchEngine3;