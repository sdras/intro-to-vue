<template>
  <section class="container">
    <div class="flexrow">
      <div class="unit" v-for="unit in manifest" :key="unit.item">
        <app-child :item="unit.item" :url="unit.url"></app-child>
      </div>
    </div>
  </section>
</template>

<script>
import AppChild from "~/components/AppChild.vue";

export default {
  components: {
    AppChild,
  },
  data() {
    return {
      manifest: [
        {
          item: "backpack",
          url:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/backpack.jpg",
        },
        {
          item: "tshirt",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/tshirt.jpg",
        },
        {
          item: "sweatshirt",
          url:
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/sweatshirt.jpg",
        },
      ],
    };
  },
};
</script>