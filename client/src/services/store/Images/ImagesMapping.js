import axios from 'axios'
import ImageURL from '../../configuration/ImageURL'
import { SendOff, AxiosSuccess, AxiosError, JoinServerArray, DownloadToFileAuth } from '../Common'
import { ImagesActionTypes } from './ImagesReducer'
import { Token } from '../Token'

export const ImagesSelector = state => ({
    images: state.home.images
})

export const ImagesDispatch = dispatch => ({
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
                    ImagesActionTypes.GET_IMAGES
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
    },
    downloadImageToFile: input => {
        var fetchImagePromise = DownloadToFileAuth(input.url, input.name)
        return fetchImagePromise
    },
})
