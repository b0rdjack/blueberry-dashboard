<template>
  <b-col id="reports_view">
    <b-row class="header">
      <b-col>
        <span class="title">Signalement</span>
        <span class="last-update">(Dernière mise à jour le: 01/04/2020)</span>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col cols="1">
        <div class="total">
          <span>Total: {{reports.length}}</span>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-3 data">
      <b-col>
        <ReportsTab :columns="columns" :reports="reports"/>
      </b-col>
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
      columns: ["ID", "Titre", "Message", "Catégorie", "Actions"],
      reports: [
        {
          id: '1',
          titre: 'Utilisateur fake',
          message: "Rayane Yagoubi est un fake c'est un vieux pervers en vrai",
          categorie: 'Spam'
        },
        {
          id: '2',
          titre: 'Harceleur',
          message: "Alex Belatta m'harcèle depuis 1 semaine j'arrive pas à le bloquer !",
          categorie: 'Spam'
        },
        {
          id: '3',
          titre: 'Insulte',
          message: "Billy Suy m'insulte alors que je ne lui ai rien fait, il faut le suspendre !",
          categorie: 'Insulte'
        }
      ]
    };
  }
};
</script>