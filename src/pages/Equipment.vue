<template>
  <q-page padding>
    <page-header :title="title" />
    <p>Plate umpires stand behind the catcher, call balls and strikes, and control many aspects of the game.
      They need to wear protective equipment, including</p>
    <div class="row">
      <div class="col">
        <ul>
          <li>a face mask</li>
          <li>a chest protector</li>
          <li>leg guards</li>
          <li>suitable footwear</li>
        </ul>
      </div>
      <div class="col">
        <clickable-image src="equipment_and_role.jpg" alt="Protective equipment" no-margin />
      </div>
    </div>
    <p class="q-mt-md">Base umpires start near the bases, and are responsible for making safe and out calls at the bases.
      They also need appropriate footwear.</p>
    <p>All umpires should carry a ball/strike/out counter ("clicker"), which they operate with their left hand.</p>
    <section-header title="Beginner umpire" />
    <p>Beginner umpires often worry about technical rules such as interference or obstruction. While these are important
      elements of the game, it is important to stress that beginners are not expected to know all the rules immediately.
      Rule knowledge builds naturally over time, but starts with these basic decisions.</p>
    <section-header title="Signals" />
    <p>There are two types of signals that an umpire will use. One set is used to communicate to the players, coaches,
      scorers and spectators the decisions made during the game, e.g. safe and out, fair and foul.</p>
    <p>The other set of signals is used to communicate between the umpires, e.g. the number of outs. Following are a
      few of the more common signals that you may be required to use while umpiring.</p>
    <section-header title="Rules" />
    <p>The most common decisions that an umpire must make are:</p>
    <p class="text-center text-weight-bold">Ball or Strike — Safe or Out — Fair or Foul</p>
  </q-page>
</template>

<script>
import ClickableImage from '../components/ClickableImage'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'

const PAGE_TITLE = 'Equipment and Role'

export default {
  name: 'PageEquipment',
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
