<template>
      <div class="container">  
        <div class="row">
          <div class="col-md-12">  
            <h3>Persons</h3>               
            <person-section></person-section>                         
        </div>
      </div>
    </div>
</template>

<script>
import PersonSection from '../components/person-section'
// import { mapGetters } from 'vuex'

export default {
  name: 'Persons',
  components: {
    PersonSection
  },
  data: function () {
    return {
      fullWidth: true
    }
  }
}
</script>

<style scoped>

</style>
