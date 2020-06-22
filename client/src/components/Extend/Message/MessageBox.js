import React from 'react'
import './Message.css'

class MessageBox extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            text: {
                ok: "OK",
                cancel: "CANCEL",
            }
        }
    }

    render = () => (
        <div className={`message-box message-box-${this.props.type ?? "none"}`} style={{width: (this.props.width ?? "400") + "px"}}>
            <div className="message-box-header">{this.props.header}</div>
            <div className="message-box-body">{this.props.text}</div>
            <div className="message-box-actions amr-4">
                <input type="button" className={`message-box-${this.props.onOK ?? "none"} btn-primary`} onClick={this.props.onOK}
                    value={this.state.text.ok}>
                </input>
                <input type="button" className={`message-box-${this.props.onCancel ?? "none"}`} onClick={this.props.onCancel}
                    value={this.state.text.cancel}>
                </input>
            </div>
        </div>
    )
}

export default MessageBox
