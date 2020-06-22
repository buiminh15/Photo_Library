import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserSelector, UserDispatch } from '../../../services/store/User/UserMapping'
import DefaultComponent from '../../Extend/Default/DefaultComponent'

class RegisterPanel extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            text: {
                forgot: 'Forgot your password?',
                submit: 'Join',
                back: 'Login',
                messageError: 'Something went wrong, please try again',
                messageRequired: 'Please enter all required field',
                messageSuccess: 'Your account has been successfully registed',
            },
        }

        this.UI.clearLocationState()
    }

    onSubmitClick = e => {
        this.props.turnOnLoading()
        var data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }
        if (data.username.length === 0 || data.email.length === 0 || data.password.length === 0) {
            this.props.turnOffLoading()
        } else {
            this.props.createUser(data)
                .then(res => {
                    this.props.redirect("/login", "", {
                        type: "success",
                        message: this.state.text.messageSuccess,
                    })
                })
                .catch(error => {
                    this.props.turnOffLoading()
                })
        }
    }

    render = () => (
        <div className={"register-panel flex-column center h100 px-3" + this.props.getLoadingClass()}>
            <div className="register-logo mb-4">
                <div className="register-login flex-row center">
                    <div>Already have an account?</div>
                    <Link to="/login">
                        <input type="button" className="btn-primary-link w100 h-50" defaultValue={this.state.text.back}></input>
                    </Link>
                </div>
            </div>
            <div className="register-input flex-column xs-12 md-6 amb-4">
                <div className="register-name flex-row amr-4">
                    <div className="register-first-name flex-1 amb-1">
                        <div>First name</div>
                        <input type="text" className="w100"
                            value={this.state.name} onChange={this.UI.setInputState('firstName')}
                        ></input>
                    </div>
                    <div className="register-last-name flex-1 amb-1">
                        <div>Last name</div>
                        <input type="text" className="w100"
                            value={this.state.name} onChange={this.UI.setInputState('lastName')}
                        ></input>
                    </div>
                </div>
                <div className="register-email amb-1">
                    <div>Email address</div>
                    <input type="email" className="w100"
                        value={this.state.email} onChange={this.UI.setInputState('email')}
                    ></input>
                </div>
                <div className="register-username amb-1">
                    <div>Username</div>
                    <div>(only letters, numbers, and underscores)</div>
                    <input type="text" className="w100"
                        value={this.state.username} onChange={this.UI.setInputState('username')}
                    ></input>
                </div>
                <div className="register-password amb-1">
                    <div>Password (min. 6 char)</div>
                    <input type="password" className="w100"
                        value={this.state.password} onChange={this.UI.setInputState('password')}
                    ></input>
                </div>
                <div className="register-submit">
                    <input type="button" className="btn-black w100 h-50" defaultValue={this.state.text.submit} onClick={this.onSubmitClick}></input>
                </div>
                <div className="register-terms flex-row ver-center">
                    <div>By joining, you agree to the Terms and Privacy Policy</div>
                </div>
            </div>
        </div>
    )
}

export default connect(UserSelector, UserDispatch)(DefaultComponent(RegisterPanel))
