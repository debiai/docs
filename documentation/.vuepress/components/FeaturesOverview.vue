<template>
  <div class="features">
    <div
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
    </div>
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

<style scoped>
.features {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.feature {
  padding: 10px 30px;
}
.feature.clickable {
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.1s;
}

.feature.clickable:hover {
  background-color: #f0f0f0;
}

.features img {
  width: 30px;
  padding-right: 5px;
}
</style>
