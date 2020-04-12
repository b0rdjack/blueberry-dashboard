<template>
  <b-col id="users_view">
    <b-row class="header">
      <b-col>
        <span class="title">Utilisateurs</span>
        <span class="last-update">(Dernière mise à jour à: {{currentTime}})</span>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col cols="1">
        <div class="total">
          <span>Total: {{users.length}}</span>
        </div>
      </b-col>
    </b-row>
    <b-row class="mt-3">
      <TheUsersTab :fields="columns" :users="users" />
    </b-row>
  </b-col>
</template>
<script>
import { mapState } from "vuex";
import TheUsersTab from "@/components/users/TheUsersTab.vue";
export default {
  name: "Users",
  components: {
    TheUsersTab
  },
  computed: {
    ...mapState(["users"]),
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
          tdClass: "column-ids",
          class: "text-center"
        },
        {
          key: "firstname",
          label: "Prénom",
          sortable: true,
          class: "text-center"
        },
        {
          key: "lastname",
          label: "Nom",
          sortable: true,
          class: "text-center"
        },
        {
          key: "date_of_birth",
          label: "Date de naissance",
          class: "text-center",
          sortable: true
        },
        {
          key: "age",
          label: "Âge",
          sortable: true,
          class: "text-center"
        },
        {
          key: "email",
          label: "E-mail",
          sortable: true,
          class: "text-center"
        },
        {
          key: "sexe",
          label: "Sexe",
          sortable: true,
          class: "text-center"
        },
        {
          key: "created_at",
          label: "Créer le",
          class: "text-center"
        }
      ]
    };
  }
};
</script>