<template>
<div>  

    <intro-section></intro-section>

      
</div>
</template>

<script>
import IntroSection from '../components/intro-section'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    IntroSection
  },
  computed: {
    ...mapGetters({
      db: 'db'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
