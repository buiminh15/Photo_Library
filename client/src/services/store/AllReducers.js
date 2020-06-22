import { combineReducers } from 'redux'
import { AuthentReducer } from './Authent/AuthentReducer'
import { AccountReducer } from './Account/AccountReducer'
import { UserReducer } from './User/UserReducer'
import { DashboardReducer } from './Dashboard/DashboardReducer'

const AllReducer = {
    authent: AuthentReducer,
    account: AccountReducer,
    user: UserReducer,
    dashboard: DashboardReducer,
}

export default combineReducers(AllReducer)
