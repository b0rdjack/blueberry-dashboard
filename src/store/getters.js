export default {
  getReportById: (state) => (id) => {
    return state.reports.find(report => report.id === id);
  }
}