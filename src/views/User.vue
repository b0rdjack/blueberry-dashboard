<template>
  <b-col id="user_view">
    <b-row class="header">
      <b-col>
        <span class="title">Utilisateur #{{user.id}}</span>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col>
        <b-card class="user-block">
          <b-card-title>
            <b-row>
              <b-col>{{user.firstname}} {{user.lastname}}</b-col>
            </b-row>
          </b-card-title>
          <b-card-sub-title>Créé le: {{user.created_at}}</b-card-sub-title>
          <b-card-body>
            <b-card-text class="details-list">
              <ul>
                <li>
                  <b-row>
                    <b-col>
                      <span class="text">Âge:</span>
                      <b-badge pill class="age">{{user.age}}</b-badge>
                    </b-col>
                  </b-row>
                </li>
                <li>
                  <b-row>
                    <b-col>
                      <span class="text">Date de naissance:</span>
                      <span class="date">{{user.date_of_birth}}</span>
                    </b-col>
                  </b-row>
                </li>
                <li>
                  <b-row>
                    <b-col>
                      <span class="text">Genre:</span>
                      <b-badge pill :class="sexeClass">{{user.sexe}}</b-badge>
                    </b-col>
                  </b-row>
                </li>
                <li>
                  <b-row>
                    <b-col>
                      <span class="text">E-mail:</span>
                      <span class="e-mail">{{user.email.toLowerCase()}}</span>
                    </b-col>
                  </b-row>
                </li>
              </ul>
            </b-card-text>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col>
        <b-card class="reports-block">
          <b-card-title>
            <b-row>
              <b-col>Signalements</b-col>
            </b-row>
          </b-card-title>
          <b-card-body>
            <b-row v-if="got_reported.length > 0">
              <b-col>
                <span class="history-title">Signalé:</span>
                <b-list-group class="mt-1">
                  <ReportHistoryItem
                    v-for="(report,index) in got_reported"
                    :key="index"
                    :report_id="report.id"
                    :created_at="report.date"
                    :description="report.description"
                    :status="report.status"
                  />
                </b-list-group>
              </b-col>
            </b-row>
            <b-row class="mt-2" v-if="reported.length > 0">
              <b-col>
                <span class="history-title">Signale:</span>
                <b-list-group class="mt-1">
                  <ReportHistoryItem
                    v-for="(report,index) in reported"
                    :key="index"
                    :report_id="report.id"
                    :created_at="report.date"
                    :description="report.description"
                    :status="report.status"
                  />
                </b-list-group>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-col>
</template>
<script>
import { mapGetters } from "vuex";
import ReportHistoryItem from "@/components/common/ReportHistoryItem.vue";
export default {
  name: "User",
  components: {
    ReportHistoryItem
  },
  computed: {
    ...mapGetters(["getUserById", "getReportByAccused", "getReportByAccusing"]),
    user() {
      return this.getUserById(this.$route.params.id);
    },
    got_reported() {
      return this.getReportByAccused(this.$route.params.id);
    },
    reported() {
      return this.getReportByAccusing(this.$route.params.id);
    },
    sexeClass() {
      return this.user.sexe == "Homme" ? "male" : "female"
    }
  }
};
</script>