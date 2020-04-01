<template>
  <div id="app">
    <b-container fluid class="d-flex flex-column">
      <b-row class="h-100">
        <VerticalMenu />
        <b-col cols="10" id="main">
          <b-row>
            <Header />
          </b-row>
          <b-row>
            <router-view />
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import VerticalMenu from "@/components/VerticalMenu.vue";
export default {
  components: {
    Header,
    VerticalMenu
  }
};
</script>
