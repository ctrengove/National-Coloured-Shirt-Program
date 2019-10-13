<template>
  <q-page padding>
    <page-header :title="title" />
    <div class="row">
      <div class="col-4">
        <clickable-image src="other_signal_1.jpg" alt="Suspending play" />
      </div>
      <div class="col-8">
        <section-header title="Suspending play (time) and dead ball" />
        <ul>
          <li>Any umpire may suspend play by calling 'time'.</li>
          <li>Call is made loud and clear while raising both arms above the head.</li>
          <li>Calling 'time' will immediately suspend play, so it is important to wait until all plays have finished.</li>
          <li>The same signal is used for dead ball situations, such as when the pitched or batted ball strikes the
            batter's body. In this case the call is 'dead ball'.</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <clickable-image src="other_signal_2.jpg" alt="Home run" />
      </div>
      <div class="col-8">
        <section-header title="Home run" />
        <ul>
          <li>The home run signal is given when a fair-batted fly ball travels over the outfield fence prior to
            touching the ground, or hits the foul pole above the fence line.</li>
          <li>The right arm is extended above the head with the fist clenched. A clockwise circling motion is used to
            indicate the home run.</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <clickable-image src="other_signal_3.jpg" alt="Holding up the pitcher" />
      </div>
      <div class="col-8">
        <section-header title="Holding up the pitcher" />
        <ul>
          <li>Rather than suspending play, it is sometimes necessary to simply stop the pitcher from pitching when the
            batter is not ready.</li>
          <li>The plate umpire ‘stops the pitcher’ by raising their open right hand (or left hand for a left handed
            batter) and pointing their palm toward the pitcher to gain their attention.</li>
          </ul>
      </div>
    </div>
  </q-page>
</template>

<script>
import ClickableImage from '../components/ClickableImage'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const PAGE_TITLE = 'Other Signals'

export default {
  name: 'PageOtherSignals',
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
