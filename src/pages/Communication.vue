<template>
  <q-page padding>
    <page-header :title="title" />
    <section-header title="The plate meeting" />
    <div class="row">
      <div class="col">
        <clickable-image src="communication_1.jpg" alt="The plate meeting" />
      </div>
      <div class="col">
        <clickable-image src="communication_2.jpg" alt="The plate meeting" />
      </div>
    </div>
    <p class="q-mt-md">Just before the game starts, a plate meeting is held between the umpires and the coaches of both teams.</p>
    <p>The plate umpire stands behind home plate, the base umpire stands in front of the plate, and the coaches stand to
      the sides, on the same side as the dugout that their team is occupying.</p>
    <p>The plate meeting provides the opportunity to make introductions, to clarify any special rules or game
      conditions, and to confirm team line-ups.</p>
    <div class="row">
      <div class="col">
        <clickable-image src="communication_3.jpg" alt="Giving the count" />
      </div>
      <div class="col">
        <section-header title="Giving the count" />
        <p>The count should be given</p>
        <ul>
          <li>After three pitches, and when three balls and/or two strikes is reached</li>
          <li>After placing the ball into play after a delay or suspension in play</li>
          <li>When a base runner advances to the next base</li>
        </ul>
        <p><em>Note:</em> When giving the count, it is verbalised, with balls first, and strikes second. The number of
          balls is indicated with the left hand, and the number of strikes is indicated with the right.</p>
      </div>
    </div>
  </q-page>
</template>

<script>
import ClickableImage from '../components/ClickableImage'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const PAGE_TITLE = 'Communication'

export default {
  name: 'PageCommunication',
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
