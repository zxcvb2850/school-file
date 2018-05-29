import * as types from "./action-type";

/*
*  初始化state
* */

const defaultState = {
    login_status: false,
    token: ''
};

export const loginStatus = (state = defaultState, action) => {
    switch (action.type) {
        case types.GET_TOKEN:
            if (localStorage.getItem(action.key)) {
                return {login_status: true, token: localStorage.getItem(action.key)};
            } else {
                return {login_status: false, token: ""};
            }
        case types.STORAGE_TOKEN:
            localStorage.setItem(action.key, action.pwd);
            return {login_status: true, token: action.pwd};
        case types.DELETE_TOKEN:
            localStorage.setItem(action.key, "");
            return {login_status: false, token: ""};
        case types.CLEAR_LOCAL:
            localStorage.clear();
            return {login_status: false, token: ""};
        default:
            return state;
    }
}