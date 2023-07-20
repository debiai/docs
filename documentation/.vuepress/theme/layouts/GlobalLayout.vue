<template>
  <div id="global-layout">
    <Navbar />
    <component :is="layout" />
    <Footer v-if="displayFooter" />
  </div>
</template>

<script>
// This is the global layout component.
// We only did modify it to add our custom footer.
// Refer to the global-components/Footer.vue file to see the footer.

// More information on how to customize the layout:
// https://codemonkeys.tech/vuepress-tutorial-8/#using-the-global-layout

import Navbar from "@theme/components/Navbar.vue";
import Footer from "../global-components/Footer.vue";

export default {
  data() {
    return {
      displayFooter: true,
    };
  },
  components: {
    Navbar,
    Footer,
  },
  mounted() {},
  computed: {
    layout() {
      // This fetches the layout from the frontmatter of the current page.
      // There is no need to change this.
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout;
        }
        this.displayFooter = true;
        return "Layout";
      }
      this.displayFooter = false;
      return "NotFound";
    },
  },
};
</script>
