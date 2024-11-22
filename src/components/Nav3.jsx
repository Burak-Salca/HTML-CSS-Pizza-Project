import React from 'react'

function Nav3(props) {
    const { data } = props;
    return (
        <li className="footer-nav-li">
            <img src={data.imgURL} alt={data.alt} />
            <a className="footer-nav-a">{data.name}</a>
        </li>
    )
}

export default Nav3