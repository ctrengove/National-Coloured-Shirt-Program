<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-blue text-white">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
        <q-toolbar-title>{{ pageTitle }}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-white"
      :width="250"
    >
      <q-list separator dense>
        <q-item-label header class="bg-blue text-white">Menu</q-item-label>
        <q-item exact clickable :to="{ name: 'home' }">
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'equipment' }">
          <q-item-section>
            <q-item-label>Equipment and Role</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'ball-strike' }">
          <q-item-section>
            <q-item-label>Ball or Strike</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'safe-out' }">
          <q-item-section>
            <q-item-label>Safe or Out</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'safe-signal' }">
          <q-item-section>
            <q-item-label>The Safe Signal</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'out-signal' }">
          <q-item-section>
            <q-item-label>The Out Signal</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'fair-foul' }">
          <q-item-section>
            <q-item-label>Fair or Foul</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'other-signals' }">
          <q-item-section>
            <q-item-label>Other Signals</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'infield-fly' }">
          <q-item-section>
            <q-item-label>The Infield Fly</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'making-decision' }">
          <q-item-section>
            <q-item-label>Making a Decision</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'two-umpire-system' }">
          <q-item-section>
            <q-item-label>The Two Umpire System</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'three-basic-principles' }">
          <q-item-section>
            <q-item-label>Three Basic Principles</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'communication' }">
          <q-item-section>
            <q-item-label>Communication</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{ name: 'crew-signals' }">
          <q-item-section>
            <q-item-label>Crew Signals</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  computed: {
    pageTitle () {
      return this.$store.state.settings.pageTitle
    }
  }
}
</script>
