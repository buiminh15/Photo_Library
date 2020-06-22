export const UIClass = component => {
    return {
        clearLocationState: () => {
            var pathname = component.props.location.pathname
            component.props.history.replace({pathname, state: {}})
        },
        setLocationState: newState => {
            var pathname = component.props.location.pathname
            component.props.history.replace({pathname, state: newState})
        },
        getLocationState: key => {
            var location = component.props.location
            if (location && location.state && location.state[key]) {
                return component.props.location.state[key]
            }
            return undefined
        },
        setInputState: (name, callback) => event => {
            var newState = {}
            var inputType = event.target.type.toLowerCase()
            var value = inputType === 'checkbox' ? event.target.checked : event.target.value
            newState[name] = value
            component.setState(newState)
            if (callback !== undefined) callback(name, value)
        },
    }
}

export const MSGClass = component => {
    return {
        setNotify: (type, message) => {
            var newState = {
                notify: {
                    type: type,
                    message: message,
                }
            }
            component.setState(newState)
        },
        turnOn: () => {
            var newState = {
                showNotify: true,
            }
            component.setState(newState)
        },
        turnOff: () => {
            var newState = {
                showNotify: false,
            }
            component.setState(newState)
        },
    }
}
