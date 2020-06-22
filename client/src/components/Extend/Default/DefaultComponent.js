import React from 'react'
import Loading from '../Middle/Loading'
import Redirection from '../Middle/Redirection'

const DefaultComponent = ChildComponent => {
    class DefaultComponent extends React.Component {
        constructor (props) {
            super(props)
            this.state = {}
        }

        render() {
            return <ChildComponent {...this.props} />
        }
    }
    return Redirection(Loading(DefaultComponent))
}

export default DefaultComponent
