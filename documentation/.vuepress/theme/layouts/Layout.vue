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
    <template #page-bottom>
      <div id="footer">
        <div id="partners">
          <span>
            DebiAI is carried out by
            <a class="logo" href="https://www.irt-systemx.fr/en/">
              <img src="/Logo_SystemX_800px.jpg" alt="IRT SystemX" />
            </a>
          </span>
          <span>
            And is integrated in
            <a class="logo" href="https://www.confiance.ai/en/">
              <img src="/H0605_Logo_ConfianceAI_2000px.png" alt="Confiance AI" />
            </a>
          </span>
        </div>
        <div id="top">
          <div>
            <p>CONTACT INFORMATION</p>
            <p>
              IRT SystemX <br />
              Centre d’intégration Nano-INNOV <br />
              2 boulevard Thomas Gobert <br />
              91120 PALAISEAU
            </p>
          </div>
          <div>
            <p>CONTACTS</p>
            <p>
              Phone. +33 (0)1 69 08 06 17 <br />
              <a href="mailto:contact@irt-systemx.fr">contact@irt-systemx.fr</a><br />
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
              <a href="https://www.youtube.com/user/IRTSystemX/" title="Follow on Youtube"><i
                  class="fa-brands fa-youtube" /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/institut-de-recherche-technologique-systemx/"
                title="Follow on LinkedIn">
                <i class="fa-brands fa-linkedin" /></a>
            </li>
            <li>
              <a href="https://twitter.com/IRTSystemX" title="Follow on Twitter">
                <i class="fa-brands fa-twitter" /></a>
            </li>
            <li>
              <a href="https://fr-fr.facebook.com/IRTSystemX/" title="Follow on Facebook">
                <i class="fa-brands fa-facebook" /></a>
            </li>
          </div>
        </div>
        <div id="legal">
          <a href="https://www.irt-systemx.fr/en/legal-notice/">Legal notice</a>
        </div>
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.page #footer {
  border-top: solid 1px var(--c-border);
  font-size: 0.9em;
  color: var(--c-text-lightest);
  margin: 140px 100px 0 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.page #footer #partners {
  padding: 15px 0 15px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 15px;
  gap: 100px;
}

.page #footer #partners span {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.page #footer #partners .logo img {
  height: 60px;
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

.page #footer #legal {
  display: flex;
  margin-top: 30px;
  padding-top: 10px;
  border-top: solid 1px var(--c-border);
  gap: 20px;
  width: 100%;
  justify-content:center;
}
</style>