<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" v-for="(column, index) in columns" :key="index">{{column}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(report, index) in reports" :key="index">
          <th scope="row">{{report.id}}</th>
          <td>{{report.titre}}</td>
          <td>{{report.message}}</td>
          <td>{{report.categorie}}</td>
          <td class="column-action">
            <b-row class="actions">
              <b-col cols="8">
                <b-button class="approve">
                  <font-awesome-icon :icon="['fas', 'check-circle']" />
                </b-button>
                <b-button class="delete">
                  <font-awesome-icon :icon="['fas', 'trash-alt']" />
                </b-button>
              </b-col>
            </b-row>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    columns: {
      type: Array,
      default: () => ["Column"]
    },
    reports: {
      type: Array,
      default: () => [{
        id: '',
        titre: '',
        message: '',
        categorie: ''
      }]
    }
  }
};
</script>