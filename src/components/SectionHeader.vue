<template>
  <h3>{{ title }}</h3>
</template>

<script>
export default {
  name: 'SectionHeader',
  props: ['title']
}
</script>

<style lang="sass">
h3
  color: $ncsp-color
  font-size: 20px
  font-weight: bold
  margin: 0
</style>
