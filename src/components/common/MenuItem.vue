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
            <li v-for="(link, index) in links" :key="index">
              <router-link :to="{name: `${link.name}` }" class="nav-link">
                <font-awesome-icon :icon="link.icon" class="icon alt" />
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
  name: "MenuItem",
  props: {
    title: "",
    links: {
      type: Array,
      default: () => [
        {
          name: "",
          title: "",
          icon: ""
        }
      ]
    }
  }
};
</script>