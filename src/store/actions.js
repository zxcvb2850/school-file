/*
*  通过actions修改state
* */

import * as types from "./mutation-types";

export const addNum = ({ commit }) => {
  commit(types.SET_NUM,1);
};
