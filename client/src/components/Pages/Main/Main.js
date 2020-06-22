import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AuthComponent from '../../Extend/Default/AuthComponent'
import HeaderPanel from '../Redirect/Header/HeaderPanel'
import SidebarPanel from '../Redirect/Sidebar/SidebarPanel'
import FooterPanel from '../Redirect/Footer/FooterPanel'
import AccountPanel from '../../User/Account/AccountPanel'
import Settings from '../Others/Settings/Settings'
import Feedback from '../Others/Feedback/Feedback'
import Contributors from '../Others/Contributors/Contributors'
import Dashboard from '../Home/Dashboard/Dashboard'
import Liked from '../Home/Liked/Liked'
import Downloads from '../Home/Downloads/Downloads'
import History from '../Home/History/History'

class Main extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            sidebarStatus: false,
        }
    }
    
    closeSidebar = e => {
        this.setState({
            sidebarStatus: false
        })
    }
    openSidebar = () => {
        this.setState({
            sidebarStatus: true
        })
    }

    render = () => (
        <div className="main-panel flex-column h100">
            <BrowserRouter>
                <SidebarPanel show={this.state.sidebarStatus} closeSidebar={this.closeSidebar}></SidebarPanel>
                <HeaderPanel openSidebar={this.openSidebar}></HeaderPanel>
                <div className="main-content flex-column h100 over-y-auto">
                    <Switch>
                        <Route exact path="/account" component={AccountPanel}></Route>
                        <Route exact path="/settings" component={Settings}></Route>
                        <Route exact path="/feedback" component={Feedback}></Route>
                        <Route exact path="/contributors" component={Contributors}></Route>
                        <Route exact path="/Liked" component={Liked}></Route>
                        <Route exact path="/Downloads" component={Downloads}></Route>
                        <Route exact path="/History" component={History}></Route>
                        <Route component={Dashboard}></Route>
                    </Switch>
                </div>
                <FooterPanel></FooterPanel>
            </BrowserRouter>
        </div>
    )
}

export default AuthComponent(Main)
