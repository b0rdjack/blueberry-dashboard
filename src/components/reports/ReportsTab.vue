<template>
  <b-col id="reportstab_block">
    <b-table :items="reports" :fields="fields" thead-class="thead-block">
      <template
        v-slot:cell(accused)="item"
      >{{item.item.accused.firstname}} {{item.item.accused.lastname}}</template>
      <template v-slot:cell(by)="item">{{item.item.by.firstname}} {{item.item.by.lastname}}</template>
      <template v-slot:cell(actions)="item">
        <b-row class="actions">
          <b-col class="approve">
            <b-button title="accept" size="sm" @click="changeStatus(item.item.id, true)">
              <font-awesome-icon :icon="['fas', 'check-circle']" />
            </b-button>
          </b-col>
          <b-col class="details">
            <router-link
              type="button"
              tag="button"
              :to="{name: 'report', params: { id: item.item.id }}"
              class="btn btn-secondary btn-sm"
            >
              <font-awesome-icon :icon="['fas', 'eye']" />
            </router-link>
          </b-col>
          <b-col class="delete">
            <b-button title="refuse" size="sm" @click="changeStatus(item.item.id, false)">
              <font-awesome-icon :icon="['fas', 'trash-alt']" />
            </b-button>
          </b-col>
        </b-row>
      </template>
    </b-table>
  </b-col>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "ReportsTab",
  props: {
    fields: {
      type: Array,
      default: () => [
        {
          key: "column",
          sortable: false
        }
      ]
    },
    reports: {
      type: Array,
      default: () => [
        {
          id: "",
          accused: "",
          by: "",
          reason: "",
          description: "",
          date: "",
          status: "",
          actions: ""
        }
      ]
    }
  },
  methods: {
    ...mapActions(["changeReportStatus"]),
    changeStatus(report_id, accept) {
      const payload = {
        id: report_id,
        status: accept ? "ACCEPTED" : "REFUSED"
      };
      this.changeReportStatus(payload);
    }
  }
};
</script>