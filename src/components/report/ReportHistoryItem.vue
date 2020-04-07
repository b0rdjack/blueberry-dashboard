<template>
  <b-list-group-item>
    <b-row v-b-toggle="'history_details_' + report_id " @click="showDetails" class="report-title">
      <b-col cols="11">
        <span>Signalement #{{report_id}}</span>
      </b-col>
      <b-col>
        <font-awesome-icon v-if="state.show" :icon="['fas', 'chevron-up']" class="chevron-up" />
        <font-awesome-icon v-else :icon="['fas', 'chevron-down']" class="chevron-down" />
      </b-col>
    </b-row>
    <b-row class="report-details">
      <b-collapse :id="'history_details_' + report_id " class="mt-2">
        <b-row>
          <b-col>
            <p class="date">Date: {{created_at}}</p>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut magna ex.
              <br />Aliquam vel gravida sapien. Duis porttitor magna tempor, imperdiet ex at, molestie enim.
            </p>
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
    created_at: ""
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