export default {
  getReportById: (state) => (id) => {
    return state.reports.find(report => report.id === id);
  },
  getReportByAccused: (state) => (id) => {
    return state.reports.filter(report => report.accused.id === id);
  },
  getReportByAccusing : (state) => (id) => {
    return state.reports.filter(report => report.by.id === id);
  },
  getUserById: (state) => (id) => {
    return state.users.find(user => user.id === id);
  }
}