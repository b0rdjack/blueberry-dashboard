<template>
  <b-card class="user-report-block">
    <b-card-title v-b-toggle="'more_details_' + user_id" @click="showDetails">
      <b-row>
        <b-col cols="11">
          <span>Utilisateur #{{user_id}}</span>
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
    <b-collapse :id="'more_details_' + user_id" :ref="'more_details_' + user_id">
      <b-card-body>
        <b-row>
          <b-col>
            <b-card-text class="user-name">{{user}}</b-card-text>
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
                <b-col>
                  <span>Historique des signalement {{mode}}:</span>
                </b-col>
              </b-row>
              <b-row class="history-list">
                <b-col>
                  <b-list-group>
                    <HistoryReportItem report_id="82" created_at="20/12/2019" />
                    <HistoryReportItem report_id="64" created_at="14/11/2019" />
                    <HistoryReportItem report_id="21" created_at="12/09/2019" />
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
import HistoryReportItem from "@/components/HistoryReportItem.vue";
export default {
  components: {
    HistoryReportItem
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
    user_id: ""
  },
  methods: {
    showDetails() {
      this.state.show = !this.state.show;
    }
  }
};
</script>