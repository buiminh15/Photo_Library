import React from 'react'
import Loading from '../Middle/Loading'
import Redirection from '../Middle/Redirection'
import Authenticate from '../Middle/Authenticate'

const AuthComponent = ChildComponent => {
    class AuthComponent extends React.Component {
        constructor (props) {
            super(props)
            this.state = {}
        }

        render() {
            return <ChildComponent {...this.props} />
        }
    }
    return Authenticate(Redirection(Loading(AuthComponent)))
}

export default AuthComponent
