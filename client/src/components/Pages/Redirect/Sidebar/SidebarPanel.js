import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

class SidebarPanel extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            menu: [
                { text: "Account", link: "/account" },
                { text: "Settings", link: "/settings" },
                { text: "Feedback", link: "/feedback" },
                { text: "Contributors", link: "/contributors" },
            ]
        }
    }

    render = () => (
        <div className={`sidebar-panel h100 no-select ${this.props.show ? "" : "display-none"}`}>
            <div className="sidebar-content flex-column amb-2">
                <div className="sidebar-top hr" onClick={this.props.closeSidebar}>
                    <div className="sidebar-button-back w100 h100 icon icon-previus"></div>
                </div>
                {this.state.menu.map((item, index) => (
                    <Link key={index} to={item.link} onClick={this.props.closeSidebar}>
                        <div className="sidebar-item flex-row hoz-center mx-2 px-2">{item.text}</div>
                    </Link>
                ))}
            </div>
            <div className={`sidebar-background w100 h100`} onClick={this.props.closeSidebar}></div>
        </div>
    )
}

export default SidebarPanel
