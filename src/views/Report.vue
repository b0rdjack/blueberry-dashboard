<template>
  <b-col id="report_view">
    <b-row class="header">
      <b-col>
        <span class="title">Détails du signalement #{{report.id}}</span>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col>
        <b-row>
          <b-col>
            <b-card title="Historique des conversations" class="history-conversation">
              <b-row>
                <b-col>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar venenatis nulla.</p>
                  <p>Fusce vestibulum pellentesque porta. Nunc iaculis fringilla justo quis egestas. Proin interdum consectetur lacus quis porttitor.</p>
                  <p>Phasellus nisl neque, sodales a fermentum at, pellentesque id lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
          <b-col>
            <ReportUser :user="report.by" mode="effectué" sub="Signale" :report_id="report.id"/>
            <br />
            <ReportUser :user="report.accused" mode="reçu" sub="Signalé" :report_id="report.id" />
            <br />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-col>
</template>
<script>
import { mapGetters } from "vuex";
import ReportUser from "@/components/report/ReportUser.vue";
export default {
  name: "Report",
  components: {
    ReportUser
  },
  computed: {
    ...mapGetters(["getReportById"]),
    report() {
      return this.getReportById(this.$route.params.id);
    }
  }
};
</script>