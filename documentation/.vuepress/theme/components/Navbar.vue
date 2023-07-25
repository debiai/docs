<template>
  <header class="navbar">
    <!-- Hamburger button to toggle sidebar when in mobile mode -->
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')" />

    <!-- Logo -->
    <RouterLink :to="$localePath" class="home-link">
      <img
        v-if="$site.themeConfig.logo"
        class="logo"
        :src="$withBase($site.themeConfig.logo)"
        :alt="$siteTitle"
      />
      <span
        v-if="$siteTitle && !$site.themeConfig.logo"
        ref="siteName"
        class="site-name"
        :class="{ 'can-hide': $site.themeConfig.logo }"
        >{{ $siteTitle }}</span
      >
    </RouterLink>

    <!-- Navbar links -->
    <div
      class="links"
      :style="
        linksWrapMaxWidth
          ? {
              'max-width': linksWrapMaxWidth + 'px',
            }
          : {}
      "
    >
      <NavLinks class="can-hide" />
    </div>
  </header>
</template>

<script>
import SidebarButton from "@vuepress/theme-default/components/SidebarButton.vue";
import NavLinks from "@vuepress/theme-default/components/NavLinks.vue";

export default {
  name: "Navbar",

  components: {
    SidebarButton,
    NavLinks,
  },

  data() {
    return {
      linksWrapMaxWidth: null,
    };
  },

  computed: {},

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.style
    const NAVBAR_VERTICAL_PADDING =
      parseInt(css(this.$el, "paddingLeft")) +
      parseInt(css(this.$el, "paddingRight"));
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null;
      } else {
        this.linksWrapMaxWidth =
          this.$el.offsetWidth -
          NAVBAR_VERTICAL_PADDING -
          ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0);
      }
    };
    handleLinksWrapWidth();
    window.addEventListener("resize", handleLinksWrapWidth, false);
  },
};

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property];
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem
$navbar-horizontal-padding = 1.5rem

.navbar
  padding $navbar-vertical-padding $navbar-horizontal-padding
  line-height $navbarHeight - 1.4rem
  background-color: $secondaryColor !important
  height: 4em !important
  display: flex;
  align-items: center;
  justify-content: space-between;

  *
    text-transform uppercase
    font-weight: bold !important
    color: black !important

  a, span, img
    display inline-block

  .logo
    height $navbarHeight
    min-width $navbarHeight - 1.4rem
    margin-right 0.8rem
    vertical-align top

  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative

  .links
    padding-left 1.5rem
    box-sizing border-box
    background-color white
    white-space nowrap
    font-size 0.9rem
    position absolute
    right $navbar-horizontal-padding
    top $navbar-vertical-padding
    display flex
    background-color: $secondaryColor !important;
    position: static !important;
    display: flex;


  // Drop down menu
  .nav-dropdown
    padding 0 !important
    a
      padding 10px 20px !important
      &:hover
        background: lightgray
        text-decoration: underline !important

  // Special style for the github link
  .repo-link
    font-weight: normal !important
    font-size: 0.85rem
    margin-left: 5rem
    text-transform: none !important
    border: 1px solid #ccc
    border-radius: 20px
    padding: 0 0.5rem

    &:hover
      background: #eee




@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
    .site-name
      width calc(100vw - 9.4rem)
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>
