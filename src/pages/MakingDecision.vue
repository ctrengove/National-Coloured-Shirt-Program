<template>
  <q-page padding>
    <page-header :title="title" />
    <section-header title="The leading edge" />
    <p>This is the side of the base in which the base runner is approaching. In order to determine whether a base
      runner has beaten a throw or tag, the leading edge provides the clearest view.</p>
    <clickable-image src="making_a_decision.jpg" alt="The leading edge" />
    <section-header title="Positioning" class="q-mt-md" />
    <p>You need to keep the play in front of you so that you can see</p>
    <ul>
      <li>The ball</li>
      <li>The fielder making the play</li>
      <li>The base runner (or batter-runner)</li>
      <li>The base (or area) where the play will happen</li>
    </ul>
    <p>With these four essential elements in view let the play happen, then make your call, don't anticipate the
      result.</p>
    <p>Remember that nothing can happen without the ball, so maintain an awareness of where the ball is.</p>
  </q-page>
</template>

<script>
import ClickableImage from '../components/ClickableImage'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const PAGE_TITLE = 'Making a Decision'

export default {
  name: 'PageMakingDecision',
  data () {
    return {
      title: PAGE_TITLE
    }
  },
  preFetch ({ store }) {
    store.commit('settings/setPageTitle', { title: PAGE_TITLE })
  },
  components: {
    ClickableImage,
    PageHeader,
    SectionHeader
  }
}
</script>
