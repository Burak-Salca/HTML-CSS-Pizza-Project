import React from 'react'

function MenuCard(props) {
    return (
        <div className="tanitim">
            <div className="tanitim-frame">
                <img src={props.data.imgURL} alt={props.data.name} />
                <div className="tanitim-textbox">
                    <h2>{props.data.name}</h2>
                    <div className="tanitim-textbox2">
                        <h3>4.9</h3>
                        <div className="textbox2-group">
                            <h3>(200)</h3>
                            <h3><span className="fiyat">60₺</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuCard