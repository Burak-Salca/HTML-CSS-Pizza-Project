import React from 'react'
import Nav1 from './Nav1'
import Nav2 from './Nav2'
import MenuCard from './MenuCard'

function Body() {

    const nav1 = [
        {
            "imgURL": "../Assets/Iteration-2-aseets/icons/1.svg",
            "alt": "Kore",
            "name": "YENİ! Kore",
        },
        {
            "imgURL": "../Assets/Iteration-2-aseets/icons/2.svg",
            "alt": "Pizza",
            "name": "Pizza",
        },
        {
            "imgURL": "../Assets/Iteration-2-aseets/icons/3.svg",
            "alt": "Burger",
            "name": "Burger",
        },
        {
            "imgURL": "../Assets/Iteration-2-aseets/icons/4.svg",
            "alt": "Kızartmalar",
            "name": "Kızartmalar",
        },
        {
            "imgURL": "../Assets/Iteration-2-aseets/icons/5.svg",
            "alt": "Fast food",
            "name": "Fast food",
        },
        {
            "imgURL": "../Assets/Iteration-2-aseets/icons/6.svg",
            "alt": "Gazlı İçecek",
            "name": "Gazlı İçecek",
        }
    ]

    const nav2 = [
        {
            "imgURL": "../Assets/Iteration-2-aseets/icons/1.svg",
            "alt": "Ramen",
            "name": "Ramen",
            "pizzaClass": "",
        },
        {
            "imgURL": "../Assets/Iteration-2-aseets/icons/2.svg",
            "alt": "Pizza",
            "name": "Pizza",
            "pizzaClass": "ara-nav-span",
        },
        {
            "imgURL": "../Assets/Iteration-2-aseets/icons/3.svg",
            "alt": "Burger",
            "name": "Burger",
            "pizzaClass": "",
        },
        {
            "imgURL": "../Assets/Iteration-2-aseets/icons/4.svg",
            "alt": "French fries",
            "name": "French fries",
            "pizzaClass": "",
        },
        {
            "imgURL": "../Assets/Iteration-2-aseets/icons/5.svg",
            "alt": "Fast food",
            "name": "Fast food",
            "pizzaClass": "",
        },
        {
            "imgURL": "../Assets/Iteration-2-aseets/icons/6.svg",
            "alt": "Soft drinks",
            "name": "Soft drinks",
            "pizzaClass": "",
        }
    ]

    const menuCard = [
        {
            "imgURL": "../Assets/Iteration-2-aseets/pictures/food-1.png",
            "name": "Terminal Pizza",
        },
        {
            "imgURL": "../Assets/Iteration-2-aseets/pictures/food-2.png",
            "name": "Position Absolute Acı Pizza",
        }, {
            "imgURL": "../Assets/Iteration-2-aseets/pictures/food-3.png",
            "name": "useEffect Tavuklu Burger",
        },
    ]

    return (
        <div className="general">
            <div>
                <div className="nav1">
                    <nav>
                        <ul>
                            {nav1 && nav1.map((data, index) => {
                                return (
                                    <Nav1 data={data} key={index} />
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="all-cards">
                <div id="card1">
                    <div id="card1-frame">
                        <h3>Özel Lezzetus</h3>
                        <h4>Position:Absolute Acı Burger</h4>
                        <button>
                            <span id="siparis-button">SİPARİŞ VER</span>
                        </button>
                    </div>
                </div>

                <div id="card2-3">
                    <div id="card2">
                        <div id="card2-frame">
                            <h4>Hackathlon Burger Menü</h4>

                            <button>
                                <span id="siparis-button">SİPARİŞ VER</span>
                            </button>

                        </div>
                    </div>
                    <div id="card3">
                        <div id="card3-frame">
                            <h4>Çoooook <span id="text-black">hızlı npm gibi kurye</span></h4>

                            <button>
                                <span id="siparis-button">SİPARİŞ VER</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ara-text">
                <h2>en çok paketlenen menüler</h2>
                <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
            </div>
            <div className="ara-nav">
                <nav className="ara-nav-nav">
                    <ul id="ara-nav-ul">
                        {nav2 && nav2.map((data, index) => {
                            return (
                                <Nav2 data={data} key={index} />
                            )
                        })}
                    </ul>
                </nav>
            </div>
            <div className="ara-tanitim">
                {menuCard && menuCard.map((data, index) => {
                    return (
                        <MenuCard data={data} key={index} />
                    )
                })}
            </div>
        </div>
    )
}

export default Body