import React from 'react'
import Categories from '../../Redirect/Categories/Categories'
import Card from '../Card/Card'

class Downloads extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            title: "Downloads"
        }
    }

    render = () => (
        <div className="Downloads-panel flex-column w80 h100 self-hoz-center">
            <div className="Downloads-categories">
                <Categories></Categories>
            </div>
            <div className="Downloads-title">
                <h2>{this.state.title}</h2>
            </div>
            <div className="Downloads-slide">
                <div className="Downloads-item inline-block">
                <Card
                    src="https://i.ytimg.com/vi/nEmehcK7KfQ/hqdefault.jpg"
                    title="TROLLZ - 6ix9ine Nicki Minaj  (Official Music Video) ..."
                >
                </Card>
                </div>
                <div className="Downloads-item inline-block">
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

export default Downloads
