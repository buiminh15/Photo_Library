import React from 'react'
import { connect } from 'react-redux'
import { ImagesSelector, ImagesDispatch } from '../../../services/store/Images/ImagesMapping'
import DefaultComponent from '../../Extend/Default/DefaultComponent'
import Topics from '../Redirect/Topics/Topics'
import './Home.css'

class HomePanel extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.turnOnLoading()
        this.props.getImages()
            .finally(() => {
                this.props.turnOffLoading()
            })
    }

    render = () => (
        <div className="Home-panel flex-column w80 h100 self-hoz-center">
            <div className="Home-categories">
                <Topics></Topics>
            </div>
            <div className="Home-title">
                <h2>Trending Now</h2>
            </div>
            <div className="Home-content">
            </div>
        </div>
    )
}

export default connect(ImagesSelector, ImagesDispatch)(DefaultComponent(HomePanel))
