/*
*  通过actions修改state
* */

import * as types from "./mutation-types";

export const addNum = ({ commit, state }) => {
  commit(types.SET_NUM, state.num + 1);
};
