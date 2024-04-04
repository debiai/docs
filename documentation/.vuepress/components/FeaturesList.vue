<template>
  <div class="features">
    <div
      v-for="(feature, index) in features"
      :key="feature.title"
      class="feature"
      :class="{ odd: index % 2 === 0, even: index % 2 !== 0 }"
    >
      <div v-if="index % 2 !== 0" class="feature-image">
        <img :src="feature.imageLink" alt="" />
      </div>
      <div class="feature-text">
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.description }}</p>
        <a :href="feature.linkDestination">{{ feature.linkTitle }}</a>
      </div>
      <div v-if="index % 2 === 0" class="feature-image">
        <img :src="feature.imageLink" :alt="feature.title" />
      </div>
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
};
</script>

<style scoped>
.features {
  display: flex;
  justify-content: center;
}
</style>
