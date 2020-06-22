import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'

class Categories extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            items: [
                "Nature", "People", "Technology"
            ]
        }
    }

    render = () => (
        <div className="categories-panel flex-row hoz-center h-60 amr-4">
            {this.state.items.map((name, index) => (
                <div key={index} className="categories-item">
                    <Link to="">{name}</Link>
                </div>
            ))}
        </div>
    )
}

export default Categories
