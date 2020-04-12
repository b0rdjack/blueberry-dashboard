import * as types from "./mutation-types";
export default {
  changeReportStatus: ({ commit }, payload) => {
    commit(types.CHANGE_REPORT_STATUS, payload);
  }
};
