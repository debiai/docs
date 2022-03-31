<script setup>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
</script>

<template>
  <ParentLayout>
    <template #sidebar-top>
      <div id="partners">
        <div id="SystemXLogo">
          <a class="logo" href="https://www.irt-systemx.fr/en/">
            <img src="/logo_system-x.jpg" alt="IRT SystemX" />
          </a>
        </div>
        <div id="ConfAILogo">
          <a class="logo" href="https://www.confiance.ai/en/">
            <img src="/logo_confianceai.jpg" alt="IRT SystemX" />
          </a>
        </div>
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
#partners {
  display: flex;
  padding: 20px 20px 0 20px;
  gap: 10px;
}
#partners .logo img {
  height: 50px;
}
</style>