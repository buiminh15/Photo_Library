import React from 'react'
import './Message.css'

class Notify extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            show: true
        }
    }

    render = () => (
        // hoz = [top, bottom], ver = [left, right]
        <div className={`notify-${this.props.type ?? "none"} notify-${this.props.hoz ?? "none"}-${this.props.ver ?? "none"}`}>
            {this.props.text}
        </div>
    )
}

export default Notify
