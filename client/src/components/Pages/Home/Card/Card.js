import React from 'react'
import { connect } from 'react-redux'
import { CardDispatch } from '../../../../services/store/Card/CardMapping'
import './Card.css'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    onLikeClick = e => {
        console.log('like clicked')
    }
    onPlayClick = e => {
        console.log('play clicked')
    }
    onDownloadClick = e => {
        var data = {
            url: this.props.src,
            name: this.props.alt
        }
        this.props.downloadImageToFile(data)
            .then(console.log)
            .catch(console.log)
    }

    render = () => (
        <div className="card-panel flex-column ma-2 no-select">
            <div className="card-preview mb-2">
                <img src={this.props.src} alt={this.props.title || ""}></img>
            </div>
            <div className="card-description">
                <div className="card-title px-2">
                    {this.props.title}
                </div>
                <div className="card-actions flex-row space-between pa-2">
                    <input type="button" className="btn-info-link flex-1 icon icon-star" onClick={this.onLikeClick}></input>
                    <input type="button" className="btn-info flex-1 icon icon-music" onClick={this.onPlayClick}></input>
                    <input type="button" className="btn-info-link flex-1 icon icon-download" onClick={this.onDownloadClick}></input>
                </div>
            </div>
        </div>
    )
}

export default connect(null, CardDispatch)(Card)
