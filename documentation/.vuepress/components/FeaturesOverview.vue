<template>
  <div class="features">
    <a
      v-for="feature in features"
      :key="feature.title"
      :class="'feature ' + (feature.elementIdDestination ? 'clickable' : '')"
      @click="goTo(feature.elementIdDestination)"
    >
      <h3>
        <img :src="feature.imageLink" alt="" />
        {{ feature.title }}
      </h3>
      <p>{{ feature.description }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: "FeaturesList",
  props: {
    features: {
      type: Array,
      required: true,
    },
  },
  methods: {
    goTo(elementId) {
      if (!elementId) return;
      const element = document.getElementById(elementId);
      if (!element) return;
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="stylus" scoped>
.features {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 60px;
  gap: 20px;
  /* Full width */
  position: relative;
  width: 100vw;
  left: calc(-50vw + 50%);

  .feature {
    padding: 10px 30px;
    flex: 0 0 23%;
    text-decoration: none;
    color: $textColor;

    &.clickable {
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.1s;

      &:hover {
        background-color: #f0f0f0;
        text-decoration: none;
      }
    }

    img {
      width: 30px;
      padding-right: 5px;
    }
  }
}

@media (max-width: 768px) {
  .features {
    flex-direction: column;
    align-items: center;
    left: 0;
    width: auto;
    gap: 10px;

    .feature {
      width: 80%;
      flex: none;
    }
  }
}
</style>
