<template>
  <app-header></app-header>
  <div class="table-container">
    <app-table-properties></app-table-properties>
  </div>
  <div class="liner"></div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppTableProperties from "./components/AppTableProperties.vue";

export default {
  name: "App",
  components: { AppHeader, AppTableProperties },
};
</script>

<style scoped>
.table-container {
  width: 100vw;
}

.liner {
  width: 100vw;
  height: 1180px;
  position: absolute;
  top: 432px;
  background-color: #f4f9fc;
  z-index: -10;
}
</style>
