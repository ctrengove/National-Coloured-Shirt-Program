<template>
  <q-page padding>
    <page-header :title="title" />
    <p>Beginning umpires commonly start out as a base umpire working with a plate umpire in the Two Umpire System.
      This System divides responsibility for various decisions between the two umpires.</p>
    <ul>
      <li>The plate umpire calls balls and strikes, safes and outs, fair and foul and plays at 3rd base and home</li>
      <li>The base umpire calls safes and outs on plays at 1st and 2nd base</li>
      <li>Both umpires must watch runners touch bases and base runners tagging up on fly ball</li>
    </ul>
    <p><em>Note:</em> The Two Umpire System requires umpires to move into positions appropriate for each play.</p>
    <section-header title="Base umpire positioning and movement" />
    <p>The starting position for the base umpire when there are no runners on base is in foul territory about 6 or 7
      metres beyond 1st base.</p>
    <p>With a runner on 1st, the starting position for the base umpire is half to two-thirds of the distance between
      1st and 2nd base.</p>
    <p>With runners on 2nd or 3rd, the base umpire starts approximately halfway between 2nd and 3rd bases.</p>
    <div class="row">
      <div class="col">
        <clickable-image src="the_two_umpire_system.jpg" alt="The two umpire system" />
      </div>
      <div class="col">
        <ul>
          <li>For an infield play, the umpire moves into fair territory and obtains an angle on the play</li>
          <li>For an outfield hit, the umpire moves into the diamond, keeping the ball and the play in front of you</li>
        </ul>
      </div>
    </div>
  </q-page>
</template>

<script>
import ClickableImage from '../components/ClickableImage'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const PAGE_TITLE = 'The Two Umpire System'

export default {
  name: 'PageTwoUmpireSystem',
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
