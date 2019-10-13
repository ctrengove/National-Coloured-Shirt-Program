<template>
  <q-page padding>
    <q-carousel
      v-model="slide"
      navigation
      swipeable
      animated
      control-color="blue"
      height="80vh"
    >
      <q-carousel-slide name="logo">
        <q-img src="statics/img/logo.jpg" alt="Community Umpire Program" />
        <section-header title="Purpose" class="q-mt-md" />
        <p>The Community Umpire Program seeks to promote basic umpire training and development. It is designed for
          those who are new to the role of umpiring.</p>
        <p>The aim is to teach the fundamentals of umpiring, enhancing the development of umpires and providing a
          smooth link to the Level 1 Introduction to Umpiring Program.</p>
      </q-carousel-slide>
      <q-carousel-slide name="publications">
        <page-header title="Publications" />
        <p>The following information is available from Softball Australia or Member States:</p>
        <ul>
          <li><strong>Rules in Pictures</strong><br />A quick introduction to learning the rules of softball.</li>
          <li><strong>Rules in Pictures smart-phone app</strong><br />A quick introduction to learning the rules of
            softball, available for iOS and Android devices.</li>
          <li><strong>Official Softball Playing Rules & Case Book</strong><br />A comprehensive, detailed description
            of the rules.</li>
        </ul>
        <p>To order, go to the Softball Australia <a target="_blank" href="http://www.softball.org.au/the-rules-of-softball/">website</a>.</p>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script>
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

export default {
  name: 'PageHome',
  data () {
    return {
      slide: 'logo'
    }
  },
  preFetch ({ store }) {
    store.commit('settings/setPageTitle', { title: null })
  },
  components: {
    PageHeader,
    SectionHeader
  }
}
</script>
