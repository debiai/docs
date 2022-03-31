<template>
  <div id="homeFooter">
    <div id="partners">
      DebiAI is carried out by
      <a class="logo" href="https://www.irt-systemx.fr/en/">
        <img src="logo_system-x.jpg" alt="IRT SystemX" />
      </a>
      And is integrated in
      <a class="logo" href="https://www.confiance.ai/en/">
        <img src="logo_confianceai.jpg" alt="Confiance AI" />
      </a>
    </div>
    <div id="footer">Apache 2.0 licenced | IRT SystemX | 2022</div>
  </div>
</template>

<script setup>
</script>

<style lang="css" scoped>
#homeFooter {
  font-size: 0.7em;
}
#partners {
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border);
}
#partners .logo img {
  margin: 0 1em;
  height: 60px;
  padding: 30px 40px 30px 10px;
}

#footer {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--c-border);
}
</style>