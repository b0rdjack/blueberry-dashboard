<template>
  <b-col id="the_users_tab_block">
    <b-table
      :items="users"
      :fields="fields"
      selectable
      select-mode="single"
      @row-selected="onRowSelected"
    ></b-table>
  </b-col>
</template>
<script>
export default {
  name: "TheUsersTab",
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
    users: {
      type: Array,
      default: () => [
        {
          id: 0,
          firstname: "",
          lastname: "",
          date_of_birth: "",
          age: 0,
          email: "",
          sexe: "Homme",
          created_at: ""
        }
      ]
    }
  },
  methods: {
    onRowSelected(item) {
      let id = item[0].id
      this.$router.push({ name: "user", params: { id } });
    }
  }
};
</script>