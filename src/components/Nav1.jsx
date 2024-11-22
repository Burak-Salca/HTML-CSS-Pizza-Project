import React from 'react'

function Nav1(props) {
    const { data } = props;
    // console.log(data);
    return (
        <li>
            <a>
                <img src={data.imgURL} alt={data.alt} />
                {data.name}
            </a>
        </li>
    )
}

export default Nav1