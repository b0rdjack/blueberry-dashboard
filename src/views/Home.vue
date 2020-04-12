<template>
  <b-row id="home_view" class="mt-5">
    <b-col>
      <b-card class="line-chart">
        <b-card-title>Graphique n°1</b-card-title>
        <b-card-sub-title>Nombre d'utilisateurs sur l'année</b-card-sub-title>
        <b-card-body>
          <b-row>
            <b-col>
              <line-chart :chartdata="line_data" />
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col>
      <b-card class="bar-chart">
        <b-card-title>Graphique n°2</b-card-title>
        <b-card-sub-title>Nombre de signalements sur l'année</b-card-sub-title>
        <b-card-body>
          <b-row>
            <b-col>
              <bar-chart :chartdata="bar_data" />
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </b-col>
    <b-col>
      <b-card class="radar-chart">
        <b-card-title>Graphique n°3</b-card-title>
        <b-card-sub-title>Segmentation des utilisateurs par âge</b-card-sub-title>
        <b-card-body>
          <b-row>
            <b-col>
              <radar-chart :chartdata="radar_data" />
            </b-col>
          </b-row>
        </b-card-body>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import LineChart from "@/components/common/LineChart.vue";
import BarChart from "@/components/common/BarChart.vue";
import RadarChart from "@/components/common/RadarChart.vue";
import PieChart from "@/components/common/PieChart.vue";
export default {
  name: "Home",
  components: {
    LineChart,
    BarChart,
    RadarChart,
    PieChart
  },
  data() {
    return {
      line_data: {
        labels: ["Janvier", "Février", "Mars", "Avril"],
        datasets: [
          {
            label: "Utilisateurs",
            backgroundColor: "#f94172",
            data: [0, 12, 20, 18, 22, 29, 32]
          }
        ]
      },
      bar_data: {
        labels: ["Janvier", "Février", "Mars", "Avril"],
        datasets: [
          {
            label: "Signalements",
            backgroundColor: "#4ac7f3",
            data: [0, 2, 5, 3]
          }
        ]
      },
      radar_data: {
        labels: ["27-33 ans", "23-26 ans", "18-22 ans", "13-17 ans"],
        datasets: [
          {
            label: "Utilisateurs",
            borderColor: "#f94172",
            backgroundColor: "#F79CA3",
            data: [7, 17, 27, 12]
          }
        ]
      }
    };
  }
};
</script>
