<template>
  <q-page padding>
    <page-header :title="title" />
    <p><span class="text-weight-bold">The position of the ball</span> is the deciding factor in the ‘fair’ or ‘foul’
      call, <span class="text-weight-bold">not the position of the fielder</span>. Any part of the line and the base is
      considered fair territory. There are three main cases to consider: balls on the infield, balls in the outfield,
      and balls that bounce over a base.</p>
    <clickable-image src="fair_or_foul.jpg" alt="Fair and foul territory" />
    <p class="q-mt-md">A fair ball must:</p>
    <ul>
      <li>Settle in fair territory between 1st and 3rd bases, or</li>
      <li>Bounce past 3rd or 1st base in fair territory, or</li>
      <li>Bounce over first or third base, or</li>
      <li>Fall fair beyond 1st or 3rd base on a fly ball, or</li>
      <li>Be first touched on or over fair territory.</li>
    </ul>
    <p><span class="text-weight-bold">Fair territory</span> is the area within foul lines.
      <span class="text-weight-bold">Foul territory</span> is the area outside the foul lines. The line is considered in
      fair territory so the entire ball must be outside the lines to be foul.</p>
    <p><em>Note:</em> If a fielder is standing in foul territory and touches the ball whilst over fair territory, it is
      a fair ball. Likewise, if a fielder is standing in fair territory and touches the ball over foul territory, it is
      a foul ball.</p>
    <section-header title="Other rules relating to foul balls" />
    <ul>
      <li>On a foul, the ball is usually dead. Runners may not advance and cannot be put out.</li>
      <li>However, if a foul ball is caught, the batter is out and the ball is alive. Runners can advance and can be
        put out.</li>
      <li>A foul ball is a strike when the batter has less than two strikes</li>
      <li>Once there are two strikes on the batter, a foul ball is not a strike</li>
    </ul>
    <div class="row">
      <div class="col-4">
        <clickable-image src="fair_or_foul_2.jpg" alt="Fair ball signal" />
      </div>
      <div class="col-8">
        <section-header title="Fair ball signal" />
        <ul>
          <li>A fair ball should be signalled when the ball lands, or is first touched within a metre of the foul
            lines</li>
          <li>'Fair ball' is signalled by extending your arm straight out from the shoulder and horizontal to the ground
            toward the infield</li>
        </ul>
      </div>
    </div>
    <div class="row q-mt-md">
      <div class="col-4">
        <clickable-image src="fair_or_foul_3.jpg" alt="Foul ball signal" />
      </div>
      <div class="col-8">
        <section-header title="Foul ball signal" />
        <ul>
          <li>A foul ball is a legally batted ball that settles in foul territory between home and 1st base or between
            home and 3rd base, bounds past 1st or 3rd base in foul territory, or first touches foul territory beyond
            1st or 3rd base</li>
          <li>'Foul ball' is signalled by raising both arms above the head and calling in a loud and clear voice,
            'foul ball'</li>
          </ul>
      </div>
    </div>
  </q-page>
</template>

<script>
import ClickableImage from '../components/ClickableImage'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const PAGE_TITLE = 'Fair or Foul'

export default {
  name: 'PageFairFoul',
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
