<template>
  <div :class="{ 'q-mr-sm': !noMargin }" :style="{ 'flex-basis': scale }" >
    <q-img :src="`statics/img/${src}`" :alt="alt" @click="showDialog = true" />
    <q-dialog
      v-model="showDialog"
    >
      <q-card style="width: 500px; max-width: 80vw;" >
        <q-card-section class="row items-center">
          <div class="image-title">{{ alt }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup size="xs"/>
        </q-card-section>
        <q-img :src="`statics/img/${src}`" :alt="alt" />
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'ClickableImage',
  props: {
    src: String,
    alt: String,
    noMargin: { type: Boolean, default: false },
    scale: { type: String, default: 'auto' }
  },
  data () {
    return {
      showDialog: false
    }
  }
}
</script>

<style lang="sass">
.image-title
  color: $ncsp-color
  font-size: 14px
  font-weight: bold
  margin: 0
</style>
