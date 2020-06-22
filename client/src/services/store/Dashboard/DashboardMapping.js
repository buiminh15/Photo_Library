import axios from 'axios'
import ImageURL from '../../configuration/ImageURL'
import { SendOff, AxiosSuccess, AxiosError, JoinServerArray } from '../Common'
import { DashboardActionTypes } from './DashboardReducer'
import { Token } from '../Token'

export const DashboardSelector = state => ({
    images: state.dashboard.images
})
export const DashboardDispatch = dispatch => ({
    getImages: input => {
        var getImagePromise = axios.get(ImageURL.GET_IMAGES, {
            headers: {authorization: Token.get()}
        })
        .then(AxiosSuccess)
        .then(
            res => {
                JoinServerArray(res, "data.images", "urls.thumb")(ImageURL.JOIN_SERVER)
                JoinServerArray(res, "data.images", "urls.full")(ImageURL.JOIN_SERVER)
                SendOff(dispatch,
                    DashboardActionTypes.GET_IMAGES
                )(res)
                return Promise.resolve(res)
            }
        )
        .catch(AxiosError)
        .catch(
            error => {
                return Promise.reject(error)
            }
        )
        return getImagePromise
    }
})
