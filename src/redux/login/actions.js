/*
*  定义方法
* */
import * as types from "./action-type";

//获取token
export const getToken = key => {
    return {type: types.GET_TOKEN, key}
};
//储存token
export const storageToken = (key, pwd) => {
    return {type: types.STORAGE_TOKEN, key, pwd}
};
//删除token
export const deleteToken = key => {
    return {type: types.DELETE_TOKEN, key}
};
//清除所有localStorage
export const clearLocal = () => {
    return {type: types.CLEAR_LOCAL}
};