<template>
  <b-col id="verticalmenu_block">
    <b-row class="title-section">
      <b-col class="text-center pt-4 pb-4">
        <h1>Blueberry</h1>
      </b-col>
    </b-row>
    <!-- Main menu  -->
    <MenuItem :title="title" :links="links" />
  </b-col>
</template>
<script>
import MenuItem from "@/components/common/MenuItem.vue";
export default {
  name: "TheVerticalMenu",
  components: {
    MenuItem
  },
  data() {
    return {
      title: "Main",
      links: [
        {
          name: "home",
          title: "Home",
          icon: "chart-line"
        },
        {
          name: "users",
          title: "Utilisateurs",
          icon: "users"
        },
        {
          name: "reports",
          title: "Signalement",
          icon: "exclamation-triangle"
        }
      ]
    };
  }
};
</script>