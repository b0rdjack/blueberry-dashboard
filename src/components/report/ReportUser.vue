<template>
  <b-card class="user-report-block">
    <b-card-title v-b-toggle="'more_details_' + user.id" @click="showDetails">
      <b-row>
        <b-col cols="11">
          <span>Utilisateur #{{user.id}}</span>
        </b-col>
        <b-col>
          <font-awesome-icon v-if="state.show" :icon="['fas', 'chevron-up']" class="chevron-up" />
          <font-awesome-icon v-else :icon="['fas', 'chevron-down']" class="chevron-down" />
        </b-col>
      </b-row>
    </b-card-title>
    <b-card-sub-title>
      <span>{{sub}}</span>
    </b-card-sub-title>
    <b-collapse :id="'more_details_' + user.id" :ref="'more_details_' + user.id">
      <b-card-body>
        <b-row>
          <b-col>
            <b-card-text class="user-name">{{user.firstname}} {{user.lastname}}</b-card-text>
            <b-card-text class="details-list">
              <ul>
                <li>
                  <b-row>
                    <b-col>
                      <span class="text">Nombre de signalement fait:</span>
                      <b-badge pill class="value">14</b-badge>
                    </b-col>
                  </b-row>
                </li>
                <li>
                  <b-row>
                    <b-col>
                      <span class="text">Nombre de signalenemt subit:</span>
                      <b-badge pill class="value">7</b-badge>
                    </b-col>
                  </b-row>
                </li>
                <li>
                  <b-row>
                    <b-col>
                      <span class="text">Création du compte:</span>
                      <b-badge pill class="value">2018</b-badge>
                    </b-col>
                  </b-row>
                </li>
              </ul>
            </b-card-text>
            <b-card-text class="history">
              <b-row class="mode">
                <b-col v-if="reports.length > 0">
                  <span>Historique des signalement {{mode}}:</span>
                </b-col>
              </b-row>
              <b-row class="history-list">
                <b-col>
                  <b-list-group>
                    <ReportHistoryItem
                      v-for="(report,index) in reports"
                      :key="index"
                      :report_id="report.id"
                      :created_at="report.date"
                      :description="report.description"
                    />
                  </b-list-group>
                </b-col>
              </b-row>
            </b-card-text>
          </b-col>
        </b-row>
      </b-card-body>
    </b-collapse>
  </b-card>
</template>
<script>
import { mapGetters } from "vuex";
import ReportHistoryItem from "@/components/report/ReportHistoryItem.vue";
export default {
  name: "ReportUser",
  components: {
    ReportHistoryItem
  },
  computed: {
    ...mapGetters(["getReportByAccused", "getReportByAccusing"]),
    reports() {
      if (this.sub == "Signale") {
        let reports = this.getReportByAccusing(this.user.id);
        return reports.filter(report => report.id != this.report_id);
      } else {
        let reports = this.getReportByAccused(this.user.id);
        return reports.filter(report => report.id != this.report_id);
      }
    }
  },
  data() {
    return {
      state: {
        show: false
      }
    };
  },
  props: {
    user: "",
    mode: "",
    sub: "",
    report_id: ""
  },
  methods: {
    showDetails() {
      this.state.show = !this.state.show;
    }
  }
};
</script>