import React from 'react'

function FooterImages({ data }) {
    return (

        <li><img src={data.imgURL} alt={data.alt} /></li>

    )
}

export default FooterImages