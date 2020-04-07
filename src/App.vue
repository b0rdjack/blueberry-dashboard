<template>
  <div id="app">
    <b-container fluid class="d-flex flex-column">
      <b-row class="h-100">
        <TheVerticalMenu />
        <b-col cols="10" id="main">
          <b-row>
            <TheHeader />
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
import TheHeader from "@/components/common/TheHeader.vue";
import TheVerticalMenu from "@/components/common/TheVerticalMenu.vue";
export default {
  components: {
    TheHeader,
    TheVerticalMenu
  }
};
</script>
