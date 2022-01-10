import { showName, SHOW_NAME, SET_NAME } from "./actions";

const initialState = {
    userName: 'User',
    isSh: true,
};

export const profileReducer = (state = initialState,action) => {
    switch (action.type) {
        case SHOW_NAME:
            return {
                ...state,
                isSh: !state.isSh,
            };
        case SET_NAME:
            return {
                ...state,
                userName: action.payload,
            };
        default:
            return state;
    }
}