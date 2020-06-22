import React from 'react'
import { connect } from 'react-redux'
import { DashboardSelector, DashboardDispatch } from '../../../../services/store/Dashboard/DashboardMapping'
import DefaultComponent from '../../../Extend/Default/DefaultComponent'
import Categories from '../../Redirect/Categories/Categories'
import Card from '../Card/Card'
import './Dashboard.css'

class DashboardPanel extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.turnOnLoading()
        this.props.getImages()
            // .then(console.log)
            .catch(console.log)
            .finally(() => {
                this.props.turnOffLoading()
            })
    }

    render = () => (
        <div className="dashboard-panel flex-column w80 h100 self-hoz-center">
            <div className="dashboard-categories">
                <Categories></Categories>
            </div>
            <div className="dashboard-title">
                <h2>Trending Now</h2>
            </div>
            <div className="dashboard-slide">
                {this.props.images.map((image, index) => (
                    <div key={index} className="dashboard-item inline-block">
                        <Card src={image.urls.thumb} alt={image.title} title={image.title}></Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default connect(DashboardSelector, DashboardDispatch)(DefaultComponent(DashboardPanel))
