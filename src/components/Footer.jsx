import React from 'react'
import Nav3 from './Nav3'
import HotMenu from './hotMenu'
import FooterImages from './FooterImages'

const nav3 = [
    {
        "imgURL": "Assets/Iteration-2-aseets/footer/icons/icon-1.png",
        "alt": "adress",
        "name": "341 Londonderry Road, Istanbul Türkiye"
    },
    {
        "imgURL": "Assets/Iteration-2-aseets/footer/icons/icon-2.png",
        "alt": "email",
        "name": "aciktim@teknolojikyemekler.com"
    },
    {
        "imgURL": "Assets/Iteration-2-aseets/footer/icons/icon-3.png",
        "alt": "phone",
        "name": "+90 216 123 45 67"
    },
]

const hotMenu = [
    "Terminal Pizza",
    "5 Kişilik Hackathlon Pizza",
    "useEffect Tavuklu Pizza",
    "Beyaz Console Frosty",
    "Testler Geçti Mutlu Burger",
    "Position Absolute Acı Burger"]

const images = [
    {
        "imgURL": "Assets/Iteration-2-aseets/footer/insta/li-0.png",
        "alt": "Instagram-1",
    },
    {
        "imgURL": "Assets/Iteration-2-aseets/footer/insta/li-1.png",
        "alt": "Instagram-2",
    },
    {
        "imgURL": "Assets/Iteration-2-aseets/footer/insta/li-2.png",
        "alt": "Instagram-3",
    },
    {
        "imgURL": "Assets/Iteration-2-aseets/footer/insta/li-3.png",
        "alt": "Instagram-4",
    },
    {
        "imgURL": "Assets/Iteration-2-aseets/footer/insta/li-4.png",
        "alt": "Instagram-5",
    },
    {
        "imgURL": "Assets/Iteration-2-aseets/footer/insta/li-5.png",
        "alt": "Instagram-6",
    }
]

function Footer() {
    return (
        <footer>
            <div className="footer-first-frame">
                <div className="footer-text-group-a1">
                    <div className="footer-text-group-a2">
                        <h2>Teknolojik Yemekler</h2>
                        <nav className="footer-nav">
                            <ul className="footer-nav-ul">
                                {nav3 && nav3.map((data, index) => {
                                    return (
                                        <Nav3 data={data} key={index} />
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>

                    <div className="footer-text-group-b1">
                        <h3>Hot Menu</h3>
                        <nav className="footer-nav2">
                            <ul className="footer-nav2-ul">
                                {hotMenu && hotMenu.map((data, index) => {
                                    return (
                                        <HotMenu data={data} key={index} />
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>

                    <div className="footer-instagram">
                        <h3>Instagram</h3>
                        <div className="footer-instagram-images">
                            <ul>
                                {images && images.map((data, index) => {
                                    return (
                                        <FooterImages data={data} key={index} />
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-group">
                    <h4>© 2023 Teknolojik Yemekler.</h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer