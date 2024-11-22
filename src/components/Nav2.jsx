import React from 'react'

function Nav2(props) {
    const { data } = props;
    return (
        <li className="ara-nav-li">
            <a className="ara-nav-a">
                <img src={data.imgURL} alt={data.alt} />
                {<span className={data.pizzaClass}>{data.name}</span>}
            </a>
        </li>
    )
}

export default Nav2