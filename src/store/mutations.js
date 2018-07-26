/**/

import * as types from "./mutation-types";

const mutations = {
  [types.SET_NUM](state, num) {
    state.num = num;
  }
};

export default mutations;
