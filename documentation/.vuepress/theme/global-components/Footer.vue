<template>
  <div id="Footer" :class="sidebarOpen ? 'reducedWidth' : 'fullWidth'">
    <!-- Partners -->
    <fieldset><legend>PARTNERS</legend></fieldset>

    <div id="partners">
      <a class="logo" href="https://www.irt-systemx.fr/en/">
        <img id="logo_systemx" src="/Logo_SystemX.png" alt="IRT SystemX" />
      </a>
      <a class="logo" href="https://www.confiance.ai/en/">
        <img
          id="logo_confiance"
          src="/Logo_ConfianceAI.png"
          alt="Confiance AI"
        />
      </a>
    </div>

    <!-- Website structure -->
    <div id="structure">
      <ul
        class="section"
        v-for="(section, i) in config.themeConfig.nav"
        :key="i"
      >
        <li class="title">
          <a :href="section.link">{{ section.text }}</a>
        </li>
        <div class="subSections">
          <a
            class="subSection"
            v-for="(subSection, j) in section.items"
            :key="j"
            :href="subSection.link"
          >
            {{ subSection.text }}
          </a>
        </div>
      </ul>
    </div>

    <!-- Legal -->
    <div id="legal">
      <a href="/meta/legal"> Legal notice </a>
      -
      <a href="/meta/legal#privacy-policy"> Personal data and cookies </a>
      All rights reserved © 2020 IRT SystemX
    </div>
  </div>
</template>

<script>
import config from "../../config.js";

export default {
  name: "Footer",
  data() {
    return {
      config: config,
    };
  },
  computed: {
    sidebarOpen() {
      return this.$route.path !== "/";
    },
  },
};
</script>

<style lang="stylus" scoped>

#Footer {
  font-size: 0.7em;
  position: relative;
  padding-top: 50px;

  &.fullWidth {
    left: 0px;
    width: 100vw;
  }
  &.reducedWidth {
    left: 20rem; /* width of the sidebar */
    width: calc(100vw - 20rem);
  }

  /* Partners */
  #partners {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    padding: 5px 30px 15px 30px;
  }

  fieldset {
    border: 1px solid transparent;
    border-top-color: lightgray;
  }

  legend {
    color: rgb(182, 182, 182);
    padding: 0 10px 0 10px;
  }

  #logo_systemx {
    height: 45px;
  }
  #logo_confiance {
    height: 70px;
  }

  /* Website structure */
  #structure {
    background-color: #222222;
    color: white;
    padding: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    text-transform: uppercase;

    .title {
        list-style-type: "-  ";
        color: rgb(139, 139, 139);
      a {
        color: white;
        &:hover {
          color: rgb(182, 182, 182);
        }
      }
    }

    .section {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 10px;
      margin-right: 30px;
    }

    .subSections {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .subSection {
      color: rgb(182, 182, 182);
    }
    .subSection:hover {
      color: white;
    }
  }

  /* Legal */
  #legal {
    font-size: 1.1em;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    display: flex;
    gap: 10px;
    /* border-top: 1px solid var(--c-border); */

    a {
      color: lightgray;
    }
  }
}

@media (max-width: 950px) {
  #Footer.reducedWidth {
    left: 15rem; /* width of the sidebar */
    width: calc(100vw - 15rem);
  }
}

@media (max-width: 720px) {
  #Footer {
    font-size: 0.6em;

    #structure {
      flex-direction: column;
    }

    &.reducedWidth {
      left: 0px;
      width: 100vw;
    }
  }
}
</style>
