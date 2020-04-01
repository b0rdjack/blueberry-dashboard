<template>
  <b-col id="verticalmenu_block">
    <b-row class="title-section">
      <b-col class="text-center pt-4 pb-4">
        <h1>
          Titre - Logo
        </h1>
      </b-col>
    </b-row>
    <MenuItem :title="title" :links="links" />
  </b-col>
</template>
<script>
  import MenuItem from "@/components/MenuItem.vue";
export default {
  components : {
    MenuItem
  },
  data() {
    return {
      title: 'Menu',
      links: [
        {
          url: "https://google.com",
          title: "Google"
        },
        {
          url: "https://facebook.com",
          title: "Facebook"
        },
        {
          url: "https://twitter.fr",
          title: "Twitter"
        }
      ]
    }
  }
};
</script>