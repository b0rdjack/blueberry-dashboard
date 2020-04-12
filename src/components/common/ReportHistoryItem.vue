<template>
  <b-list-group-item>
    <b-row class="report-title">
      <b-col cols="11">
        <router-link :to="{name: 'report', params: {id: report_id}}" class="link-report">
          Signalement #{{report_id}}
        </router-link>
      </b-col>
      <b-col v-b-toggle="'history_details_' + report_id " @click="showDetails">
        <font-awesome-icon v-if="state.show" :icon="['fas', 'chevron-up']" class="chevron-up" />
        <font-awesome-icon v-else :icon="['fas', 'chevron-down']" class="chevron-down" />
      </b-col>
    </b-row>
    <b-row class="report-details">
      <b-collapse :id="'history_details_' + report_id " class="mt-2">
        <b-row>
          <b-col>
            <p class="date">Date: {{created_at}}</p>
            <p class="status" v-if="status">{{status}}</p>
            <p class="description">{{description}}</p>
          </b-col>
        </b-row>
      </b-collapse>
    </b-row>
  </b-list-group-item>
</template>
<script>
export default {
  name: "ReportHistoryItem",
  props: {
    report_id: "",
    created_at: "",
    description: "",
    status: ""
  },
  data() {
    return {
      state: {
        show: false
      }
    };
  },
  methods: {
    showDetails() {
      this.state.show = !this.state.show;
    }
  }
};
</script>