<script setup lang="ts">
import { RouterView } from "vue-router";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <SideBar />
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
main {
  height: 100%;
  width: calc(100% - 56px);
  margin-left: 56px;
}
</style>
