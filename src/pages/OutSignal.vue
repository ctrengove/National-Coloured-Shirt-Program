<template>
  <q-page padding>
    <page-header :title="title" />
    <p>An out signal is required whenever an out is made.</p>
    <p>Don't make the call until it is established that the fielder making the play has complete control of the ball.</p>
    <div class="row no-wrap">
      <clickable-image src="the_out_signal_1.jpg" alt="Come to a standing position" scale="25.97%"/>
      <clickable-image src="the_out_signal_2.jpg" alt="Left hand into the body" scale="21.75%"/>
      <clickable-image src="the_out_signal_3.jpg" alt="The hammer position" scale="26.88%"/>
      <clickable-image src="the_out_signal_4.jpg" alt="Lower the arms" no-margin scale="25.39%"/>
    </div>
    <p class="q-mt-md">To perform the out signal</p>
    <ul>
      <li>With your head straight forward looking at the play, come up to a standing position</li>
      <li>Bring your left hand into your body, slightly above your belt</li>
      <li>Give a brisk verbal call of ‘out’ while punching your right arm to the 90° degree hammer position and
        clenching the fist</li>
      <li>Adopt a relaxed standing position while keeping your eyes open for any further plays</li>
    </ul>
    <p><em>Note:</em> This procedure enables you to hold your view and focus on the play until all action has been
      completed. Moving too early or not staying stationary during the play can lead to incorrect decisions.</p>
  </q-page>
</template>

<script>
import ClickableImage from '../components/ClickableImage'
import PageHeader from '../components/PageHeader'

const PAGE_TITLE = 'The Out Signal'

export default {
  name: 'PageOutSignal',
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
