<template>
  <div class="banner">
    <img
      src="../assets/Designer.jpeg"
      alt=""
      :style="{ height: bannerHeight + 'vh', width: bannerWidth + 'vw' }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageBanner",
  props: {
    bannerHeight: Number,
    bannerWidth: Number,
  },
});
</script>

<style lang="scss" scoped>
img {
  object-fit: cover;
  object-position: center 25%;
}
</style>
