<template>
  <q-page padding>
    <page-header :title="title" />
    <section-header title="The division principle" />
    <p>The home plate umpire takes all calls at home plate and 3rd base and the base umpire takes all calls at
      1st and 2nd bases. There are four exceptions:</p>
    <div class="row">
      <div class="col">
        <clickable-image src="three_basic_principles.jpg" alt="The division principle" />
      </div>
      <div class="col">
        <ul>
          <li>When the batter-runner goes to 3rd base, the base umpire goes with them to make the call at 3rd</li>
          <li>On infield plays, the base umpire takes the first call on a base, even if it is at 3rd base</li>
        </ul>
      </div>
    </div>
    <ul class="q-mt-none">
      <li>When a runner steals to 3rd base, the base umpire takes the call</li>
      <li>When the base umpire is positioned between 2nd and 3rd bases and there is an attempted pick-off by the
        catcher to 1st base, the plate umpire takes the call</li>
    </ul>
    <section-header title="The infield/outfield principle" />
    <ul>
      <li>When the ball is in the infield, the base umpire moves or stays in the outfield</li>
    </ul>
    <section-header title="The leading runner principle" />
    <p>This principle dictates that the base umpire should start in a position that is up with the leading base runner.</p>
    <ul>
      <li>With a base runner at 1st base (only), the base umpire will start between 1st and 2nd bases</li>
      <li>With a base runner at 2nd base, the base umpire will start between 2nd and 3rd bases
      <p class="q-mt-sm"><em>Note: </em>This allows the base umpire to make calls at the base the leading base runner is advancing to.
        Also, on a pick-off play, the catcher is more likely to make a play on the leading base runner and the base
        umpire needs to be in a position to make this call.</p></li>
    </ul>
  </q-page>
</template>

<script>
import ClickableImage from '../components/ClickableImage'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const PAGE_TITLE = 'Three Basic Principles'

export default {
  name: 'PageThreeBasicPrinciples',
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
