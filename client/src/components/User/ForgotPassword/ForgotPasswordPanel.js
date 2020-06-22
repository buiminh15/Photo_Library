import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { UserSelector, UserDispatch } from '../../../services/store/User/UserMapping'
import DefaultComponent from '../../Extend/Default/DefaultComponent'
import Notify from '../../Extend/Message/Notify'
import { UIClass, MSGClass } from '../../common'

class ForgotPasswordPanel extends React.Component {
    constructor (props) {
        super(props)
        this.UI = UIClass(this)
        this.MSG = MSGClass(this)
        this.state = {
            email: '',
            showNotify: false,
            notify: {
                type: this.UI.getLocationState("type") ?? 'none',
                message: this.UI.getLocationState("message") ?? '',
            },
            text: {
                header: 'Reset Password',
                subHeader: 'To reset password, please provide your email',
                submit: 'Send Reset Instructions',
                back: 'Back',
                messageSuccess: 'Your password has been reset successfully!',
                messageError: 'Something went wrong, please try again',
                messageRequired: 'Please enter all required field',
            },
        }

        this.UI.clearLocationState()
    }

    onSubmitClick = e => {
        this.MSG.setNotify('none')
        this.props.turnOnLoading()
        var data = {
            email: this.state.email,
        }
        if (data.email.length === 0) {
            this.MSG.setNotify('error', this.state.text.messageRequired)
            this.props.turnOffLoading()
        } else {
            this.props.resetPassword(data)
                .then(res => {
                    return <Redirect to={{pathname: "/login", search: "", state: {
                            type: "success",
                            message: this.state.text.messageSuccess,
                    }}}></Redirect>
                })
                .catch(error => {
                    this.props.turnOffLoading()
                    this.MSG.setNotify('error', this.state.text.messageError)
                })
        }
    }

    render = () => (
        <div className={"forgot-password-panel flex-column center h100 px-3" + this.props.getLoadingClass()}>
            <Notify type={this.state.notify.type ?? "none"} hoz="bottom" ver="right" text={this.state.notify.message}></Notify>
            <div className="forgot-password-input flex-column xs-12 md-6 amb-3">
                <h2>{this.state.text.header}</h2>
                <div>{this.state.text.subHeader}</div>
                <div className="forgot-password-email">
                    <input type="email" className="w100" placeholder="Email"
                        value={this.state.email} onChange={this.UI.setInputState("email")}
                    ></input>
                </div>
                <div className="forgot-password-submit">
                    <input type="button" className="btn-black w100 h-50" defaultValue={this.state.text.submit} onClick={this.onSubmitClick}></input>
                </div>
                <div className="login-redirect">
                    <Link to="/login">
                        <input type="button" className="btn-primary-link w100 h-50" defaultValue={this.state.text.back}></input>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default connect(UserSelector, UserDispatch)(DefaultComponent(ForgotPasswordPanel))
