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
  margin-top: 0
  margin-bottom: 10px
  line-height: 1.5rem
</style>
