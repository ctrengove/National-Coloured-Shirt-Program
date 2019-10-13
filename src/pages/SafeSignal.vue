<template>
  <q-page padding>
    <page-header :title="title" />
    <p>A safe signal is required to indicate that a play made at a base has not been successful in putting out a base
      runner, perhaps because the base runner beat the throw, or a tag was missed or not in time.</p>
    <p>Don't make the call too soon!</p>
    <div class="row no-wrap">
      <clickable-image src="the_safe_signal_1.jpg" alt="Come to a standing position" scale="21.02%" />
      <clickable-image src="the_safe_signal_2.jpg" alt="Both hands up to the chest" scale="22.95%" />
      <clickable-image src="the_safe_signal_3.jpg" alt="Extend the arms horizontally" scale="35.9%" />
      <clickable-image src="the_safe_signal_4.jpg" alt="Lower the arms" no-margin scale="19.78%" />
    </div>
    <p class="q-mt-md">To perform the safe signal</p>
    <ul>
      <li>With your head straight forward looking at the play, come up to a standing position</li>
      <li>Bring both hands up to your chest about shoulder height</li>
      <li>Give a verbal call of ‘safe’, while fully extending your arms horizontally, parallel with the ground and your
        palms down</li>
      <li>Adopt a relaxed standing position while keeping your eyes open for any further plays</li>
    </ul>
    <p><em>Note:</em> This procedure enables you to hold your view and focus on the play until all action has been
      completed. Moving too early or not staying stationary during the play can lead to incorrect decisions.</p>
  </q-page>
</template>

<script>
import ClickableImage from '../components/ClickableImage'
import PageHeader from '../components/PageHeader'

const PAGE_TITLE = 'The Safe Signal'

export default {
  name: 'PageSafeSignal',
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
    PageHeader
  }
}
</script>
