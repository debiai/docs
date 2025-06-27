<template>
  <div id="newsList">
    <div
      v-for="(news, index) in newsInLang"
      :key="index"
      :class="'news ' + (newsList.length === 1 ? '' : 'small')"
    >
      <!-- Image -->
      <img class="image" :src="news.imageLink" alt="" />

      <!-- Title -->
      <h2 class="title" v-if="news.title">
        <a
          :href="news.linkDestination"
          v-if="news.linkDestination"
          target="_blank"
        >
          {{ news.title }}
        </a>
        <span v-else>{{ news.title }}</span>
      </h2>

      <!-- Tags -->
      <div class="tags" v-if="news.tags">
        <span v-for="(tag, index) in news.tags" :key="index">{{ tag }}</span>
      </div>

      <!-- Description -->
      <p class="description" v-if="news.description">
        {{ news.description }}
        <br />
        <!-- Date -->
        <span class="date" v-if="news.date">{{ news.date }}</span>
      </p>

      <!-- Link -->
      <a
        :href="news.linkDestination"
        v-if="news.linkDestination"
        class="link action-button third"
        target="_blank"
      >
        {{ news.linkTitle ? news.linkTitle : "Read more" }}
      </a>
    </div>

    <!-- If there are no news -->
    <p v-if="newsList.length === 0">Come back later for more news!</p>
  </div>
</template>

<script>
export default {
  name: "NewsList",
  props: {
    latest: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    newsList: [],
    lang: "en",
  }),
  mounted() {
    // Get the curent selected language
    this.lang = this.$lang || "en";
    // Get the news from the public/news/news.json file
    fetch("/news/news.json")
      .then((response) => response.json())
      .then((data) => {
        // If the latest prop is true, only show the 3 latest news
        if (this.latest) this.newsList = data.slice(0, 3);
        else this.newsList = data;
      });

    // Expected news format
    // [{
    //   "imageLink": "/news/images/new-feature.png",
    //   "title": {
    //     "en": "New feature",
    //     "fr": "Nouvelle fonctionnalité"
    //   },
    //   "tags": {
    //     "en": ["New", "Feature"],
    //     "fr": ["Nouveau", "Fonctionnalité"]
    //   },
    //   "description": {
    //     "en": "We have added a new feature to the project. It is great. And it is great. So, you should use it. It is great. And it is great. So, you should use it. It is great. And it is great. So, you should use it.",
    //     "fr": "Nous avons ajouté une nouvelle fonctionnalité au projet. C'est génial. Et c'est génial. Donc, vous devriez l'utiliser. C'est génial. Et c'est génial. Donc, vous devriez l'utiliser. C'est génial. Et c'est génial. Donc, vous devriez l'utiliser."
    //   },
    //   "linkTitle": {
    //     "en": "Latest releases →",
    //     "fr": "Dernières versions →"
    //   },
    //   "linkDestination": {
    //     "en": "https://git.irt-systemx.fr/Transverse/documentation/irt-systemx-vuepress-template"
    //   },
    //   "date": "2024-07-01"
    // }];
  },
  computed: {
    // Get the news with the current language
    newsInLang() {
      return this.newsList.map((news) => {
        const localNews = {
          imageLink: news.imageLink,
          date: news.date,
        };

        if (news.title)
          if (news.title[this.lang]) localNews.title = news.title[this.lang];
          else localNews.title = news.title.en;
        else localNews.title = "News";

        if (news.tags)
          if (news.tags[this.lang]) localNews.tags = news.tags[this.lang];
          else localNews.tags = news.tags.en;
        else localNews.tags = [];

        if (news.description)
          if (news.description[this.lang])
            localNews.description = news.description[this.lang];
          else localNews.description = news.description.en;
        else localNews.description = "";

        if (news.linkTitle)
          if (news.linkTitle[this.lang])
            localNews.linkTitle = news.linkTitle[this.lang];
          else localNews.linkTitle = news.linkTitle.en;
        else localNews.linkTitle = "";

        if (news.linkDestination)
          if (news.linkDestination[this.lang])
            localNews.linkDestination = news.linkDestination[this.lang];
          else localNews.linkDestination = news.linkDestination.en;
        else localNews.linkDestination = "";

        return localNews;
      });
    },
  },
};
</script>

<style scoped lang="stylus">
#newsList {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3.33%
  padding: 60px 40px;

  .news {
    min-width: 270px;
    position: relative;
    border-radius: 20px;
    box-shadow: 0 13px 27px -5px rgba(20,17,85,.1),0 8px 16px -8px rgba(20,17,85,.2);
    min-height: 570px;
    margin-bottom: 40px;
    overflow: inherit;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 700px;

    &.small {
      width: 300px;

      .image {
        height: 150px;
      }
    }


    .image {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 20px 20px 0 0;

      background-color: #f0f0f0;
      border: 1px solid #e0e0e0;
    }

    .title {
      padding: 20px;
      padding-bottom: 10px;
      margin: 0;
      font-size: 20px;
      border-bottom: none;

      a {
        text-decoration: none;
        font-weight: bold;
      }
    }

    .tags {
      display: flex;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1rem;
      flex-wrap: wrap;

      span {
        padding: 0.4rem;
        border-radius: 10px;
        font-size: 0.8rem;
        color: $accentColor;
        border: 1px solid $accentColor;
      }
    }

    .description {
      padding: 20px;
      padding-top: 10px;
    }

    .date {
      padding: 10px;
      margin: 0;
      font-size: 0.8rem;
      color: #666;
    }

    .link {
      position: absolute;
      bottom: -20px;
      left: 50%;
      transition: all ease 250ms;
      transform: translateX(-50%);
      padding: 7px 15px;
      height: auto !important
      &:hover {
        transform: translateX(-50%) scale(1.05) rotate(0.2deg);
      }
    }
  }
}

@media (max-width: 1024px) {
}
</style>
