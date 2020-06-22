import React from 'react'
import Categories from '../../Redirect/Categories/Categories'
import Card from '../Card/Card'

class Liked extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            title: "Liked"
        }
    }

    render = () => (
        <div className="Liked-panel flex-column w80 h100 self-hoz-center">
            <div className="Liked-categories">
                <Categories></Categories>
            </div>
            <div className="Liked-title">
                <h2>{this.state.title}</h2>
            </div>
            <div className="Liked-slide">
                <div className="Liked-item inline-block">
                <Card
                    src="https://i.ytimg.com/vi/nEmehcK7KfQ/hqdefault.jpg"
                    title="TROLLZ - 6ix9ine Nicki Minaj  (Official Music Video) ..."
                >
                </Card>
                </div>
                <div className="Liked-item inline-block">
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

export default Liked
