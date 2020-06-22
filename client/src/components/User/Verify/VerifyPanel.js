import React from 'react'
import { connect } from 'react-redux'
import { UserSelector, UserDispatch } from '../../../services/store/User/UserMapping'
import DefaultComponent from '../../Extend/Default/DefaultComponent'
import Notify from '../../Extend/Message/Notify'
import { UIClass, MSGClass } from '../../common'

class VerifyPanel extends React.Component {
    constructor (props) {
        super(props)
        this.UI = UIClass(this)
        this.MSG = MSGClass(this)
        this.state = {
            hash: this.props.match.params.hash,
            showNotify: false,
            text: {
                header: 'Verify Account',
                submit: 'Verify',
                messageHeader: 'Verify',
                messageSuccess: 'Your account has been successfully verified',
                messageError: 'Something went wrong, please try again',
            },
        }
    }

    onSubmitClick = e => {
        this.MSG.turnOff()
        this.props.turnOnLoading()
        var data = {
            hash: this.state.hash,
        }
        this.props.verify(data)
            .then(res => {
                this.props.redirect("/login", "", {
                    type: "success",
                    message: this.state.text.messageSuccess,
                })
            })
            .catch(error => {
                this.MSG.turnOn()
                this.props.turnOffLoading()
            })
    }

    render = () => (
        <div className={"verify-panel flex-column center h100 px-3" + this.props.getLoadingClass()}>
            <Notify type={this.state.showNotify ? "error" : "none"} hoz="bottom" ver="right" text={this.state.text.messageError}></Notify>
            <div className="verify-input flex-column xs-12 md-6 amb-3">
                <h2>{this.state.text.header}</h2>
                <div className="verify-submit">
                    <input type="button" className="btn-success w100 h-50" defaultValue={this.state.text.submit} onClick={this.onSubmitClick}></input>
                </div>
            </div>
        </div>
    )
}

export default connect(UserSelector, UserDispatch)(DefaultComponent(VerifyPanel))
