import React from 'react'
import Categories from '../../Redirect/Categories/Categories'
import Card from '../Card/Card'

class History extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            title: "History"
        }
    }

    render = () => (
        <div className="History-panel flex-column w80 h100 self-hoz-center">
            <div className="History-categories">
                <Categories></Categories>
            </div>
            <div className="History-title">
                <h2>{this.state.title}</h2>
            </div>
            <div className="History-slide">
                <div className="History-item inline-block">
                <Card
                    src="https://i.ytimg.com/vi/nEmehcK7KfQ/hqdefault.jpg"
                    title="TROLLZ - 6ix9ine Nicki Minaj  (Official Music Video) ..."
                >
                </Card>
                </div>
                <div className="History-item inline-block">
                <Card
                    src="https://i.ytimg.com/vi/nEmehcK7KfQ/hqdefault.jpg"
                    title="TROLLZ - 6ix9ine Nicki Minaj  (Official Music Video) ..."
                >
                </Card>
                </div>
            </div>
        </div>
    )
}

export default History
