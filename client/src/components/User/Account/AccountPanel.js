import React from 'react'
import { connect } from 'react-redux'
import { AccountSelector, AccountDispatch } from '../../../services/store/Account/AccountMapping'
import AuthComponent from '../../Extend/Default/AuthComponent'

class AccountPanel extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            text: {
                messageError: "Unauthorized"
            },
        }
    }

    componentDidMount () {
        this.props.getProfile()
            .catch(console.log)
    }

    render = () => (
        <div className={"account-panel flex-column h100" + this.props.getLoadingClass()}>
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
