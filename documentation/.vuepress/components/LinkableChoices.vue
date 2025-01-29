<template>
  <div class="choices">
    <a
      v-for="selectableChoice in choices"
      :key="selectableChoice.title"
      :class="getChoiceClasses(selectableChoice)"
      @click="goTo(selectableChoice)"
    >
      <span class="tag" v-if="selectableChoice.tag">
        {{ selectableChoice.tag }}
      </span>

      <img
        v-if="selectableChoice.imageLink"
        :src="selectableChoice.imageLink"
        alt=""
      />
      <h3>
        {{ selectableChoice.title }}
      </h3>
      <p v-if="selectableChoice.description">
        {{ selectableChoice.description }}
      </p>
    </a>
  </div>
</template>

<script>
export default {
  name: "choicesList",
  props: {
    choices: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getChoiceClasses(choice) {
      return {
        selectableChoice: true,
        clickable: choice.elementIdDestination || choice.linkDestination,
      };
    },
    goTo(choice) {
      if (choice.elementIdDestination)
        this.scrollTo(choice.elementIdDestination);
      else if (choice.linkDestination) this.goToLink(choice.linkDestination);
    },
    scrollTo(elementId) {
      const element = document.getElementById(elementId);
      if (!element) return;
      element.scrollIntoView({ behavior: "smooth" });
    },
    goToLink(link) {
      if (!link) return;
      this.$router.push(link).catch(() => {});
    },
  },
};
</script>

<style lang="stylus" scoped>
.choices {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px 0;
  border-radius: 20px;
  gap: 20px;

  .selectableChoice {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 10px 2px 10px;
    flex: 0 0 23%;

    text-align: justify;
    text-decoration: none;
    color: $textColor;
    border: solid 1px $textColor;
    border-radius: 5px;

    &.clickable {
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.1s;

      &:hover {
        background-color: #f0f0f0;
        text-decoration: none;
      }
    }

    h3 {
      font-size: 1rem;
      text-align: center;
    }

    img {
      width: 35px;
      height: 35px;
    }

    p{
      font-size: 0.8rem;
      text-align: center;
    }

    .tag {
      position: absolute;
      top: 0%;
      transform: translateX(50%);
      transform: translateY(-50%);

      background-color: $accentColor;
      color: $textOnAccent;
      font-weight: bold;
      border-radius: 5px;
      padding: 2px 5px;
      font-size: 0.8rem;
      margin-right: 5px;
    }
  }
}

@media (max-width: 768px) {
  .choices {
    flex-direction: column;
    align-items: center;
    left: 0;
    padding: 0px;
    transform: none;
    width: auto;
    gap: 10px;


    .selectableChoice {
      width: 80%;
      flex: none;
    }
  }
}
</style>
