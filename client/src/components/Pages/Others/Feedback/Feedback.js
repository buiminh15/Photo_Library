import React from 'react'
import './Feedback.css'

class Feedback extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div className="Feedback-panel flex-column w80 h100 self-hoz-center hoz-center mt100 amb-4">
            <div className="Feedback-item w50">
                <input type="text" className="w100" placeholder="Name"></input>
            </div>
            <div className="Feedback-item w50">
                <input type="text" className="w100" placeholder="Email"></input>
            </div>
            <div className="Feedback-item w50">
                <textarea rows="6" className="w100" placeholder="Feedback"></textarea>
            </div>
            <div className="Feedback-actions w50 flex-row ver-center">
                <input type="button" className="btn-info" value="Send Feedback"></input>
            </div>
        </div>
    )
}

export default Feedback
