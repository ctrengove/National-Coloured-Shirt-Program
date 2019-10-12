<template>
  <q-page padding>
    <page-header :title="title" />
    <div class="row">
      <div class="col-4">
        <clickable-image src="ball_or_strike_1.jpg" alt="The Strike Zone" class="q-mr-sm" />
      </div>
      <div class="col">
        <p class="q-mt-none">A strike occurs when the batter swings at, and misses the pitch, or when the pitch passes
          through the strike zone.</p>
        <p>The strike zone is the space over home plate that is below the bottom of the batter’s armpits and above the
          knees when the batter assumes their natural batting stance.</p>
      </div>
    </div>
    <p class="q-mt-none">The complete ball must pass under the armpits; some of the ball must be above the top of the
      batter’s knees; and any part of the ball can pass over any part of the home plate.</p>
    <section-header title="Calling balls and strikes" />
    <div class="row">
      <div class="col-4">
        <clickable-image src="ball_or_strike_2.jpg" alt="Tracking the pitch" class="q-mr-sm" />
      </div>
      <div class="col-4">
        <clickable-image src="ball_or_strike_3.jpg" alt="Preparing to give the signal" class="q-mr-sm" />
      </div>
      <div class="col-4">
        <clickable-image src="ball_or_strike_4.jpg" alt="Signalling a strike" class="q-mr-sm" />
      </div>
    </div>
    <ul>
      <li>Bend the knees until the eyes are level with the top of the strike zone. Allow the pitch to cross home plate.
        Do not make a call until the catcher has caught the ball, then give a brisk verbal call of ‘strike’ or ‘ball’.</li>
      <li>To signal a strike, stand and bring your left hand into your body. Raise your right arm to shoulder height
        with the fist clenched. The palm of your hand should be facing your right ear with the arm in a 90° hammer position.</li>
      <li>Then lower your arms, step back and away from the catcher and relax until you need to focus on the next pitch.</li>
    </ul>
  </q-page>
</template>

<script>
import ClickableImage from '../components/ClickableImage'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const PAGE_TITLE = 'Ball or Strike'

export default {
  name: 'PageBallStrike',
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
