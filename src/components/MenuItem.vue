<template>
  <b-row class="menuitem-block">
    <b-col>
      <b-row>
        <b-col class="pt-4 menuitem-title">
          <h3>{{ title }}</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <ul class="nav flex-column menuitem-list">
            <li class="nav-item" v-for="(link, index) in links" :key="index">
              <router-link :to="{name: 'reports' }" class="nav-link">
                <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="icon alt" />
                {{link.title}}
              </router-link>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>
<script>
export default {
  props: {
    title: "",
    links: {
      type: Array,
      default: () => [
        {
          url: "",
          title: ""
        }
      ]
    }
  }
};
</script>