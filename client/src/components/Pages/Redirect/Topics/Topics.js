import React from 'react'
import { Link } from 'react-router-dom'
import './Topics.css'

class Topics extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            items: [
                "Nature", "People", "Technology"
            ]
        }
    }

    render = () => (
        <div className="Topics-panel flex-row hoz-center h-60 amr-4">
            {this.state.items.map((name, index) => (
                <div key={index} className="Topics-item">
                    <Link to="">{name}</Link>
                </div>
            ))}
        </div>
    )
}

export default Topics
