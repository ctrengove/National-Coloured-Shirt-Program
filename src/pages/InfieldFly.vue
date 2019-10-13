<template>
  <q-page padding>
    <page-header :title="title" />
    <p>An infield fly is a fair fly ball (not including a line drive, or an attempted bunt), which can be easily caught
      by an infielder.</p>
    <p>It is called only when 1st and 2nd, or 1st, 2nd and 3rd bases are occupied with less than two outs.</p>
    <p>The purpose of the infield fly rule is to protect the batting team, as otherwise there is a possibility that a
      double or triple play can be executed if the ball is allowed to fall to the ground.</p>
    <div class="row">
      <div class="col-4">
        <clickable-image src="the_infield_fly_combined.jpg" alt="Signalling an infield fly" />
      </div>
      <div class="col-8">
        <ul>
          <li>The plate umpire calls the infield fly.</li>
          <li>By the time the ball has reached the top of its arc, and is determined by the plate umpire to be an
            infield fly, the umpire should raise their right arm in the air and call 'infield fly – batter is out'. The
            umpire must then signal 'out'.</li>
          <li>If the ball is close to the foul line and it is difficult to determine whether the ball is going to be
            fair or foul, the plate umpire will call "infield fly – batter is out if fair". If the ball is fair, the
            plate umpire will follow the protocol outlined above; if the ball is foul, the plate umpire will then
            signal 'foul ball'.</li>
        </ul>
      </div>
      <div class="row">
        <div class="col-3">
          <clickable-image src="the_infield_fly_3.jpg" alt="The infield fly assist" />
        </div>
        <div class="col-9">
          <section-header title="The infield fly assist" />
          <ul>
            <li>The base umpire assists the plate umpire by also raising their right arm to indicate an infield fly.</li>
          </ul>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import ClickableImage from '../components/ClickableImage'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const PAGE_TITLE = 'The Infield Fly'

export default {
  name: 'PageInfieldFly',
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
