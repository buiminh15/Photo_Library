import React from 'react'
import './Header.css'

class HeaderPanel extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            onSearch: false,
            text: {
                title: "Music Player"
            },
        }
    }

    onSearchClick = e => {
        var onSearch = this.state.onSearch
        this.setState({
            onSearch: !onSearch
        })
    }

    render = () => (
        <div className="header-panel flex-row space-between w100 no-select">
            <div className={`header-left-button mx-2 icon icon-next ${this.state.onSearch ? "display-none" : ""}`}
                onClick={this.props.openSidebar}
            ></div>
            <div className={`header-title mx-2 flex-row hoz-center ${this.state.onSearch ? "display-none" : ""}`}>
                {this.state.text.title}
            </div>
            <div className={`header-search mx-2 flex-row flex-1 hoz-center ${this.state.onSearch ? "" : "display-none"}`}>
                <input type="text" className="w100" placeholder="Search..."></input>
            </div>
            <div className="header-right-button mx-2 icon icon-search" onClick={this.onSearchClick}></div>
        </div>
    )
}

export default HeaderPanel
