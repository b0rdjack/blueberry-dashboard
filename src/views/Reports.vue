<template>
  <b-col id="reports_view">
    <b-row class="header">
      <b-col>
        <span class="title">Signalement</span>
        <span class="last-update">(Dernière mise à jour à: {{currentTime}})</span>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col cols="1">
        <div class="total">
          <span>Total: {{reports.length}}</span>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <ReportsTab :fields="columns" :reports="reports" />
    </b-row>
  </b-col>
</template>
<script>
import { mapState } from "vuex";
import ReportsTab from "@/components/reports/ReportsTab.vue";
export default {
  name: "Reports",
  components: {
    ReportsTab
  },
  computed: {
    ...mapState(["reports"]),
    currentTime() {
      let today = new Date();
      let hours = today.getHours();
      let minutes = today.getMinutes();
      let secondes = today.getSeconds();
      return (
        ("0" + hours).slice(-2) +
        ":" +
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + secondes).slice(-2)
      );
    }
  },
  data() {
    return {
      columns: [
        {
          key: "id",
          label: "ID",
          sortable: true,
          tdClass: "column-ids"
        },
        {
          key: "accused",
          label: "Signalé",
          sortable: true
        },
        {
          key: "by",
          label: "Signalé par",
          sortable: true
        },
        {
          key: "reason",
          label: "Raison",
          sortable: true
        },
        {
          key: "description",
          label: "Description"
        },
        {
          key: "date",
          label: "Date",
          sortable: true
        },
        {
          key: "status",
          label: "État",
          sortable: true
        },
        {
          key: "actions",
          label: "Actions",
          tdClass: "column-actions"
        }
      ]
    };
  }
};
</script>