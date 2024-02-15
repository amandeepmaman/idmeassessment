<template>
  <PurchaseHistoryTable/>
</template>

<script>
import "@fontsource/source-sans-pro"
import PurchaseHistoryTable from './components/PurchaseHistoryTable.vue';

export default {
  name: 'App',
  components: {
    PurchaseHistoryTable
  }
}
</script>

<style>
#app {
  font-family: "Source Sans Pro", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
