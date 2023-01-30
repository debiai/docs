<template>
  <div id="homeFooter">
    <div id="partners">
      DebiAI is carried out by
      <a class="logo" href="https://www.irt-systemx.fr/en/">
        <img src="/Logo_SystemX_800px.jpg" alt="IRT SystemX" />
      </a>
      And is integrated in
      <a class="logo" href="https://www.confiance.ai/en/">
        <img src="/H0605_Logo_ConfianceAI_2000px.png" alt="Confiance AI" />
      </a>
    </div>
    <div id="footer">Apache 2.0 licenced | IRT SystemX | 2023</div>
  </div>
</template>

<script setup>
</script>

<style lang="css" scoped>
#homeFooter {
  font-size: 0.7em;
}
#homeFooter #partners {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
  padding-top: 10px;
  margin-top: 10px;
  color: var(--c-text-lightest);

}
#homeFooter #partners .logo img {
  margin: 0 1em;
  height: 70px;
  padding: 10px 40px 30px 10px;
}

#homeFooter #footer {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--c-border);
  color: var(--c-text-lightest);
}
</style>