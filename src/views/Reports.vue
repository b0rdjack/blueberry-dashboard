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
import ReportsTab from "@/components/ReportsTab.vue";
export default {
  components: {
    ReportsTab
  },
  data() {
    return {
      columns: [
        {
          key: "id",
          label: "ID",
          sortable: true,
          tdClass:"column-ids"
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
      ],
      reports: [
        {
          id: "92",
          accused: "Eloise Vargas",
          by: "Sophie Pratt",
          reason: "INSULTING",
          description: "Vestibulum semper sem id efficitur dapibus",
          date: "02/04/20",
          status: "PENDING"
        },
        {
          id: "89",
          accused: "Marion Bishop",
          by: "Bobbie Reynolds",
          reason: "NOT_CORRESPONDING",
          description:
            "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
          date: "18/02/20",
          status: "ACCEPTED"
        },
        {
          id: "65",
          accused: "Dustin Hopkins",
          by: "Wallace Barrett",
          reason: "SPAM",
          description: "Nullam mattis accumsan lacinia",
          date: "14/12/19",
          status: "ACCEPTED"
        },
        {
          id: "56",
          accused: "Irvin Scott",
          by: "Suzanne Webster",
          reason: "INAPPROPRIATE",
          description:
            "Pellentesque pulvinar, nisl quis blandit pretium, purus velit lobortis mi, non varius augue est nec leo. Nulla facilisi",
          date: "25/07/19",
          status: "ACCEPTED"
        }
      ],
      currentTime: ""
    };
  },
  methods: {
    getCurrentDate() {
      let today = new Date();
      let hours = today.getHours();
      let minutes = today.getMinutes();
      let secondes = today.getSeconds();
      this.currentTime = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + secondes).slice(-2)
    }
  },
  mounted() {
    this.getCurrentDate();
  }
};
</script>