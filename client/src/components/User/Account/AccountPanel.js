import React from 'react'
import { connect } from 'react-redux'
import { AccountSelector, AccountDispatch } from '../../../services/store/Account/AccountMapping'
import AuthComponent from '../../Extend/Default/AuthComponent'
import Notify from '../../Extend/Message/Notify'
import { UIClass, MSGClass } from '../../common'

class AccountPanel extends React.Component {
    constructor (props) {
        super(props)
        this.UI = UIClass(this)
        this.MSG = MSGClass(this)
        this.state = {
            notify: {
                type: this.UI.getLocationState("type") ?? 'none',
                message: this.UI.getLocationState("message") ?? '',
            },
            text: {
                messageError: "Unauthorized"
            },
        }
    }

    componentDidMount () {
        this.props.getProfile()
            .catch(error => {
                this.MSG.setNotify('error', this.state.text.messageError)
            })
    }

    render = () => (
        <div className={"account-panel flex-column h100" + this.props.getLoadingClass()}>
            <Notify type={this.state.notify.type ?? "none"} hoz="bottom" ver="right" text={this.state.notify.message}></Notify>
            <div className="account-info flex-column self-hoz-center w50 mt100 table">
                <div className="account-name">
                    <div className="account-name-label">Name</div>
                    <div className="account-name-value">
                        {this.props.account.name}
                    </div>
                </div>
                <div className="account-email">
                    <div className="account-email-label">Email</div>
                    <div className="account-email-value">
                        {this.props.account.email}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(AccountSelector, AccountDispatch)(AuthComponent(AccountPanel))
