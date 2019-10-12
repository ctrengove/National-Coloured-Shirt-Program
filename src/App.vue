<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  preFetch ({ store }) {
    if (process.env.DEV) {
      console.log('App preFetch() called')
    }
    return store.commit('settings/setPageTitle', { title: '' })
  }
}
</script>
