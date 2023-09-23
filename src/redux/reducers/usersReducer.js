import { types } from "../types";

const initialState = {
    users: [],
    selectedUser: null
}

export default function usersReducer(state = initialState, action) {
    switch(action.type) {
        case types.USERS:
            return {...state, users: action.payload };
        case types.SELECTED_USER:
            return {...state, selectedUser: action.payload}
        default: return state
    }
}
