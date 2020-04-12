<template>
  <div id="app">
    <b-container fluid class="d-flex flex-column">
      <b-row class="h-100">
        <TheVerticalMenu />
        <b-col cols="10" id="main">
          <b-row class="mt-5">
            <router-view />
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TheVerticalMenu from "@/components/common/TheVerticalMenu.vue";
export default {
  components: {
    TheVerticalMenu
  }
};
</script>
