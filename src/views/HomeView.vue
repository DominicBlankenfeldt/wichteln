<template>
  <div class="home">
    <!-- <page-banner :bannerHeight="20" :bannerWidth="100" /> -->
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
// import PageBanner from "@/components/PageBanner.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
});
</script>
