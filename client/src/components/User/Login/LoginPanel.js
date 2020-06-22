import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserSelector, UserDispatch } from '../../../services/store/User/UserMapping'
import DefaultComponent from '../../Extend/Default/DefaultComponent'
import Notify from '../../Extend/Message/Notify'
import { UIClass, MSGClass } from '../../common'
import './Login.css'

class LoginPanel extends React.Component {
    constructor (props) {
        super(props)
        this.UI = UIClass(this)
        this.MSG = MSGClass(this)
        this.state = {
            email: '',
            password: '',
            remember: true,
            showNotify: true,
            notify: {
                type: this.UI.getLocationState("type") ?? 'none',
                message: this.UI.getLocationState("message") ?? '',
            },
            text: {
                remember: 'Remember',
                forgot: 'Forgot your password?',
                submit: 'Login',
                signup_ask: 'Don\'t have an account?',
                signup_text: 'Join',
                messageSuccess: 'Login successful',
                messageError: 'Invalid email or password',
                messageRequired: 'Please enter all required field',
            },
        }

        this.UI.clearLocationState()
    }
    
    componentDidMount() {
        this.setState(this.props.user)
    }

    onSubmitClick = e => {
        this.MSG.setNotify('none')
        this.props.turnOnLoading()
        var data = {
            email: this.state.email,
            password: this.state.password,
            remember: this.state.remember,
        }
        if (data.email.length !== 0) {
            this.props.remember(data)
        }
        if (data.email.length === 0 || data.password.length === 0) {
            this.MSG.setNotify('error', this.state.text.messageRequired)
            this.props.turnOffLoading()
        } else {
            this.props.login(data)
                .then((res) => {
                    console.log("login success:", res)
                    this.props.redirect("/account", "", {
                        type: "success",
                        message: this.state.text.messageSuccess,
                    })
                })
                .catch(error => {
                    console.log("login error:", error)
                    this.props.turnOffLoading()
                    this.MSG.setNotify('error', error.data.message ?? error.statusText)
                })
        }
    }

    render = () => (
        <div className={"login-panel flex-column center h100 px-3" + this.props.getLoadingClass()}>
            <Notify type={this.state.notify.type ?? "none"} hoz="bottom" ver="right" text={this.state.notify.message}></Notify>
            <div className="login-input flex-column xs-12 md-6 amb-4">
                <div className="login-email amb-2">
                    <div>Email</div>
                    <input type="email" className="w100"
                        value={this.state.email} onChange={this.UI.setInputState("email")}
                    ></input>
                </div>
                <div className="login-password amb-2">
                    <div className="flex-row space-between">
                        <div>Password</div>
                        <Link to="/forgot_password" className="flex-row hoz-center">{this.state.text.forgot}</Link>
                    </div>
                    <input type="password" className="w100"
                        value={this.state.password} onChange={this.UI.setInputState("password")}
                    ></input>
                </div>
                <div className="login-submit">
                    <input type="button" className="btn-black w100 h-50" defaultValue={this.state.text.submit} onClick={this.onSubmitClick}></input>
                </div>
                <div className="login-redirect flex-row ver-center amr-1 mt-3">
                    <div>{this.state.text.signup_ask}</div>
                    <Link to="/join">{this.state.text.signup_text}</Link>
                </div>
            </div>
        </div>
    )
}

export default connect(UserSelector, UserDispatch)(DefaultComponent(LoginPanel))
