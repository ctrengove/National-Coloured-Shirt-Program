<template>
  <q-page padding>
    <page-header :title="title" />
    <div class="row">
      <div class="col-4">
        <clickable-image src="safe_or_out_1.jpg"  alt="The batter-runner is out" />
        <clickable-image src="safe_or_out_2.jpg"  alt="A base runner is out" class="q-mt-xl" />
        <clickable-image src="safe_or_out_3.jpg"  alt="A base runner is out" class="q-mt-xl" />
        <clickable-image src="safe_or_out_4.jpg"  alt="The batter is out" class="q-mt-xl" />
      </div>
      <div class="col-8">
        <section-header title="The batter is out when ..." />
        <ul>
          <li>the third strike is swung at, and missed, and is caught by the catcher</li>
          <li>the batter watches the third strike cross the plate and is caught by the catcher</li>
        </ul>
        <section-header title="The batter-runner is out when ..." />
        <ul>
          <li>a fielder catches a fly ball on the full</li>
          <li>hitting a fair ball, they are tagged with the ball in the glove or bare hand while off base, or thrown
            out (by a fielder touching the base while holding the ball) prior to reaching 1st base
            <p><em>Note:</em> A legal tag requires the fielder to have the ball securely held in hand or glove when
              tagging the runner</p></li>
        </ul>
        <section-header title="A base runner is out when ..." />
        <ul>
          <li>on a force play (ie, when the runner is forced to advance because the batter becomes a batterrunner),
            a fielder holding the ball contacts the base to which the runner is forced to advance</li>
          <li>the ball is in play and the runner is legally tagged by a fielder when the runner is off the base</li>
        </ul>
        <section-header title="Batters, batter-runners and base runners are safe when ..." />
        <ul>
          <li>the above do not happen</li>
          <li>the ball is not caught</li>
          <li>a runner beats the ball to the base</li>
        </ul>
      </div>
    </div>
  </q-page>
</template>

<script>
import ClickableImage from '../components/ClickableImage'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const PAGE_TITLE = 'Safe or Out'

export default {
  name: 'PageSafeOut',
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
