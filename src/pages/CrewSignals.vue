<template>
  <q-page padding>
    <page-header :title="title" />
    <div class="row">
      <div class="col-3">
        <clickable-image src="crew_signals_1.jpg" alt="Indicating the outs" />
      </div>
      <div class="col-9">
        <section-header title="Indicating the outs" />
        <p>During the game, the plate and base umpires confirm the number of outs to each other after each batter.</p>
        <p>This is done by extending the corresponding number of fingers downwards against the trouser leg.</p>
        <p>The plate umpire indicates the number of outs first, and then the base umpire responds.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <clickable-image src="crew_signals_2.jpg" alt="Potential infield fly" />
      </div>
      <div class="col-9">
        <section-header title="Potential infield fly" />
        <p>When there are runners on 1st and 2nd, or 1st, 2nd and 3rd with less than two out, there is potential for an
          infield fly to be called.</p>
        <p>The plate and base umpire confirm this to each other by placing the right arm across the chest while
          indicating the number of outs (zero or one).</p>
      </div>
    </div>
    <div class="row">
      <div class="col-5">
        <clickable-image src="crew_signals_combined.jpg" alt="Requesting the count" />
      </div>
      <div class="col-7">
        <section-header title="Requesting the count" />
        <p>When the plate umpire is uncertain of the count, they should consult the base umpire by placing two fists
          (left hand first) against the chest in the direction of the base umpire.</p>
        <p>In return, the base umpire will indicate the count (left hand first) against their chest so it is clearly
          visible to the plate umpire. This may also be verbalised.</p>
      </div>
    </div>
  </q-page>
</template>

<script>
import ClickableImage from '../components/ClickableImage'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const PAGE_TITLE = 'Crew Signals'

export default {
  name: 'PageCrewSignals',
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
