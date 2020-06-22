export const DashboardActionTypes = {
    GET_IMAGES: "GET_IMAGES"
}

const initialDashboardState = {
    images: [],
}

export const DashboardReducer = (state = initialDashboardState, action) => {
    switch (action.type) {
        case DashboardActionTypes.GET_IMAGES:
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
