import * as types from "./mutation-types";
export default {
  [types.CHANGE_REPORT_STATUS](state, { id, status }) {
    state["reports"].find(report => report.id === id).status = status;
  }
};
