<template>
  <h2 class="page-title-font">{{ title }}</h2>
</template>

<script>
export default {
  name: 'PageHeader',
  props: ['title']
}
</script>

<style lang="sass">
h2
  color: $ncsp-color
  font-size: 24px
  text-align: center
  margin: 0
</style>
