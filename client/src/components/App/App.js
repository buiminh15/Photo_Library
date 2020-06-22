import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPanel from '../User/Login/LoginPanel'
import ForgotPasswordPanel from '../User/ForgotPassword/ForgotPasswordPanel'
import RegisterPanel from '../User/Register/RegisterPanel'
import VerifyPanel from '../User/Verify/VerifyPanel'
import Main from '../Pages/Main/Main'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Store, Persistor } from '../../services/store/Storage'
import '../../libraryConfig/Axios'
import './App.css'

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render = () => (
        <div className="App h100">
            <Provider store={Store}>
                <PersistGate persistor={Persistor} loading={null}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/forgot_password" component={ForgotPasswordPanel}></Route>
                            <Route exact path="/login" component={LoginPanel}></Route>
                            <Route exact path="/join" component={RegisterPanel}></Route>
                            <Route exact path="/verify/:hash" component={VerifyPanel}></Route>
                            <Route path="/*" component={Main}></Route>
                        </Switch>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </div>
    )
}

export default App
