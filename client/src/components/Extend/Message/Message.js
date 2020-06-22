import React from 'react'
import './Message.css'

class Message extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div className={`message-${this.props.type ?? "none"}`}>
            {this.props.text}
        </div>
    )
}

export default Message
