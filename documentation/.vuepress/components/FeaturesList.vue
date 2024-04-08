<template>
  <div class="features">
    <div
      v-for="(feature, index) in features"
      :key="feature.title"
      class="feature"
      :class="{ odd: index % 2 === 0, even: index % 2 !== 0 }"
    >
      <div class="feature-image">
        <img
          :src="feature.imageLink"
          alt=""
          :class="feature.shadow ? 'shadow' : 'no-shadow'"
        />
      </div>
      <div class="feature-text">
        <h2 :id="feature.title">{{ feature.title }}</h2>
        <p>{{ feature.description }}</p>
        <a :href="feature.linkDestination">{{ feature.linkTitle }}</a>
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

<style scoped lang="stylus">
.features {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 6rem;
  gap: 2rem;

  .feature {
    display: flex;
    align-items: center;
    margin: 2rem 0;
    max-width: 1240px;
    gap: 2rem;

    &.odd {
      flex-direction: row-reverse;
    }

    h2 {
      scroll-margin-top: 200px;
    }

    .feature-text {
      flex: 1;
      padding: 0 2rem;
    }

    .feature-image {
      flex: 1.5;

      img {
        max-width: none !important;
        width: 100%;
        border-radius: 5px;

        &.shadow {
          box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .features {
    .feature {
      flex-direction: column !important;

      .feature-text {
        padding: 0;
      }

      .feature-image {
        img {
          border-radius: 5px 5px 0 0;
        }
      }
    }
  }
}
</style>
