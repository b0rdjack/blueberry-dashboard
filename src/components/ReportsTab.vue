<template>
  <b-col id="reportstab_block">
    <b-table :items="reports" :fields="fields" thead-class="thead-block">
      <template v-slot:cell(actions)>
        <b-row class="actions">
          <b-col class="approve">
            <b-button title="accept" size="sm">
              <font-awesome-icon :icon="['fas', 'check-circle']" />
            </b-button>
          </b-col>
          <b-col class="details">
            <b-button title="see" size="sm">
              <font-awesome-icon :icon="['fas', 'eye']" />
            </b-button>
          </b-col>
          <b-col class="delete">
            <b-button title="refuse" size="sm">
              <font-awesome-icon :icon="['fas', 'trash-alt']" />
            </b-button>
          </b-col>
        </b-row>
      </template>
    </b-table>
  </b-col>
</template>
<script>
export default {
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
  }
};
</script>