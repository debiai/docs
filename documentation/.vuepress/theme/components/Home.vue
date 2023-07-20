<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <!-- Background image -->
    <div class="bg"></div>

    <!-- Title and description of the project -->
    <header class="hero">
      <div id="project">
        <h1 v-if="data.heroText !== null" id="main-title">
          {{ data.heroText || $title || "Hello" }}
        </h1>

        <p v-if="data.tagline !== null" class="description">
          {{ data.tagline || $description || "Welcome to your VuePress site" }}
        </p>

        <!-- Actions buttons -->
        <div class="action">
          <a href="/introduction/gettingStarted/" class="action-button"> Get Started </a>
          <a href="/useCases/" class="action-button secondary">
            Use cases and applications
          </a>
        </div>
      </div>

      <div id="image">
        <img
          v-if="data.heroImage"
          :src="$withBase(data.heroImage)"
          :alt="data.heroAlt || 'hero'"
        />
      </div>
    </header>

    <!-- Content of the home page (index.md) -->
    <Content class="page theme-default-content custom" />
  </main>
</template>

<script>
// import NavLink from "./NavLink.vue";
export default {
  name: "Home",

  components: {},

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
  },
};
</script>

<style lang="stylus">
/* ======== Home ======== */
.home
  padding $navbarHeight 2rem 0
  max-width 1300px;
  margin 0px auto
  display block

  .bg
    background: url(/background.svg)  no-repeat center top/cover;
    height 840px
    overflow hidden
    width 100vw
    position absolute
    top 10px
    left 0

  .hero
    position: relative
    display: flex
    justify-content: center
    min-height: 700px
    flex: 1

    #project
      display: flex
      flex-direction: column
      justify-content: center
      align-items: flex-start
      padding: 80px 0 50px 0
      // min-width 500px
      gap: 10px
      flex: 1
      z-index: 1

      h1
        color: white
        font-weight: bold
        font-size 3rem
        padding: 0
        margin: 0

      .description
        max-width 35rem
        font-size 1.4rem
        line-height 1.3
        color white

      .action
        display flex
        flex-wrap wrap
        gap 1rem

        .action-button
          display inline-block
          font-size 1rem
          height: 4rem;
          display: flex;
          align-items: center;
          color: $accentColor;
          background-color white
          padding: 0.4rem 2.6rem;
          border-radius: 100px;
          transition background-color .05s ease
          box-sizing border-box
          font-weight: bold

          &.secondary
            border: 2px solid $accentColor;
            background: transparent;
            color: white;
            border-color: white;

          &:hover
            background-color: lighten($accentColor, 35%)
            border-color: white;
            color: white;

    #image
      flex: 1.1
      display: flex
      justify-content: center
      align-items: center

      img
        flex: 1
        max-width 100%
        min-width 400px
        height auto


  .features
    // border-top 1px solid $borderColor
    background-color: transparent
    // padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between

    .feature
      max-width 30%
      min-width 300px
      text-align: center
      h3
        white-space: nowrap
      p
        color lighten($textColor, 25%)

  h2
    border none
    margin 0



@media (max-width: 1024px)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      flex-direction column

      #project
        align-items center

        #main-title
          text-align center
          font-size 2.5rem

        .description
          text-align center

        .action
          justify-content center

      #image
        img
          min-width 100%
          max-width 100%

</style>
