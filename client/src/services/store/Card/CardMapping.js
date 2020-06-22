import { DownloadToFileAuth } from '../Common'

// export const CardSelector = state => ({
// })
export const CardDispatch = dispatch => ({
    downloadImageToFile: input => {
        var fetchImagePromise = DownloadToFileAuth(input.url, input.name)
        return fetchImagePromise
    },
})
