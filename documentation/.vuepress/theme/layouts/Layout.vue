<script setup>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";

// Available template:
// navbar
// navbar-before
// navbar-after
// sidebar
// sidebar-top
// sidebar-bottom
// page
// page-top
// page-bottom
</script>

<template>
  <ParentLayout>
    <template #sidebar-bottom>
      <div id="partners">
        <div id="SystemXLogo">
          <a class="logo" href="https://www.irt-systemx.fr/en/">
            <img src="/Logo_SystemX_800px.jpg" alt="IRT SystemX" />
          </a>
        </div>
        <div id="ConfAILogo">
          <a class="logo" href="https://www.confiance.ai/en/">
            <img src="/H0605_Logo_ConfianceAI_2000px.png" alt="IRT SystemX" />
          </a>
        </div>
      </div>
    </template>
    <template #page-bottom>
      <div id="footer">
        <div id="top">
          <div>
            <p>CONTACT INFORMATION</p>
            <p>
              IRT SystemX <br />
              Centre d’intégration Nano-INNOV <br />
              8, Avenue de la Vauve – CS 90070 <br />
              91127 PALAISEAU CEDEX <br />
            </p>
          </div>
          <div>
            <p>CONTACTS</p>
            <p>
              Phone. +33 (0)1 69 08 06 17 <br />
              <a href="mailto:contact@irt-systemx.fr">contact@irt-systemx.fr</a
              ><br />
            </p>
          </div>
          <div>
            <p>NEWS</p>
            <p>
              <a href="https://www.irt-systemx.fr/en/legal-notice/feed">
                RSS feed
              </a>
              <br />
              <a href="https://www.irt-systemx.fr/?page_id=27404"> News </a>
              <br />
              <a href="https://www.irt-systemx.fr/en/irt-systemx-events">
                Events
              </a>
              <br />
              <a href="https://www.irt-systemx.fr/?page_id=18770">
                Newsletter
              </a>
              <br />
            </p>
          </div>
        </div>

        <div id="bot">
          <p>FOLLOW US</p>
          <div id="icons">
            <li>
              <a
                href="https://www.youtube.com/user/IRTSystemX/"
                title="Follow on Youtube"
                ><i class="fa-brands fa-youtube"
              /></a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/institut-de-recherche-technologique-systemx/"
                title="Follow on LinkedIn"
              >
                <i class="fa-brands fa-linkedin"
              /></a>
            </li>
            <li>
              <a
                href="https://twitter.com/IRTSystemX"
                title="Follow on Twitter"
              >
                <i class="fa-brands fa-twitter"
              /></a>
            </li>
            <li>
              <a
                href="https://fr-fr.facebook.com/IRTSystemX/"
                title="Follow on Facebook"
              >
                <i class="fa-brands fa-facebook"
              /></a>
            </li>
          </div>
        </div>
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.sidebar #partners {
  position: absolute;
  width: 100%;
  bottom: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.sidebar #partners .logo img {
  height: 70px;
}

.page #footer {
  font-size: 0.9em;
  color: var(--c-text-lightest);
  border-top: solid 1px var(--c-border);
  margin: 100px 100px 0 100px;
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.page #footer #top {
  display: flex;
  gap: 80px;
}
.page #footer #icons {
  list-style: none;
  display: flex;
  gap: 10px;
}
</style>