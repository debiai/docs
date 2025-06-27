<template>
  <div id="newsletterContent">
    <a id="newsletterLink" :href="link" :target="newTab ? '_blank' : '_self'">
      <span id="small" v-if="text">{{ text }}</span>
      <span v-if="title">{{ title }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "NewsletterLink",
  props: {
    title: {
      type: String,
      required: true,
      default: "Join our newsletter",
    },
    text: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      required: true,
    },
    newTab: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="stylus">
#newsletterContent {
  display: flex;
  justify-content: center;
  margin-top: 20px;

  #newsletterLink {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    height: 80px;
    width: 370px;
    border-radius: 5px;
    background: linear-gradient(45deg, $accentColor, $accentColor2);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

    color: white !important;
    font-size: 1.3rem;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    overflow: hidden;

    /* Add transition for smooth effect */
    transition: transform 0.4s ease, box-shadow 0.3s ease;

    span {
      text-align: center;

      &#small {
        font-size: 0.9rem;
        font-weight: normal;
      }
    }
  }

  #newsletterLink:hover {
    /* 3D effect */
    transform: translateY(-1px) scale(1.05) rotate(0.2deg);
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
  }

  #newsletterLink::before {
    content: '';
    position: absolute;
    top: -20%;
    left: -150%;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(45deg);
    transition: all 0s ease;
    pointer-events: none;
    filter: blur(15px);

  }

  #newsletterLink:hover::before {
    top: -50%;
    left: 60%;
    transition: all 0.5s ease;
  }
}
</style>
