import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

class FooterPanel extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            menu: [
                { text: "Home", link: "/", icon: "icon-home" },
                { text: "Liked", link: "/liked", icon: "icon-like" },
                { text: "Downloads", link: "/downloads", icon: "icon-download" },
                { text: "History", link: "/history", icon: "icon-history" },
            ],
        }
    }

    render = () => (
        <div className="footer-panel flex-row py-1 no-select">
            {this.state.menu.map((item, index) => (
                <Link key={index} to={item.link} className="footer-item flex-1 flex-column hoz-center" draggable="false">
                    <div className={`"footer-item-icon flex-row flex-1 w100 icon ${item.icon}`}></div>
                    <div className="footer-item-text">{item.text}</div>
                </Link>
            ))}
        </div>
    )
}

export default FooterPanel
