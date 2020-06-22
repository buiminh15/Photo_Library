export const CardActionTypes = {
    GET_IMAGE_THUMB: "GET_IMAGE_THUMB",
    GET_IMAGE_FULL: "GET_IMAGE_FULL",
}

const initialCardState = {
    images: [],
}

export const CardReducer = (state = initialCardState, action) => {
    switch (action.type) {
        case CardActionTypes.GET_IMAGE_THUMB:
            var images = action.payload.data.images
            var data = {
                ...state,
                images: images,
            }
            return data
        default:
            return state

    }
}
