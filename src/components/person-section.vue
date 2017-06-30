<template>    
  <div>  
  <form>    
    <div class="form-group">
      <label for="boardName">First Name</label>
      <input type="text" id="boardName" class="form-control" v-model="person.firstname">
    </div>        
    <div class="form-group">
      <label for="boardName">Last Name</label>
      <input type="text" id="boardName" class="form-control" v-model="person.lastname">
    </div>  
    <div class="form-group">
      <label for="boardName">Date of Birth</label>
      <input type="date" id="boardName" class="form-control" v-model="person.dateofbirth">
    </div>  
    <div class="form-group">
      <label for="boardName">Zip Code</label>
      <input type="number" id="boardName" class="form-control" v-model="person.zipcode">
    </div>       
    <button @click.prevent="addPerson(person)" class="btn btn-success marginb"><i class="fa fa-plus"></i> Add</button> 

  </form>  
    <table class="table table-striped">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Date of Birth</th>
          <th>Zip Code</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in persons">                
            <td class="col-md-2">
              {{person.firstname}}
            </td>
            <td>
              {{person.lastname}}
            </td>
            <td>
              {{person.dateofbirth}}
            </td>
            <td>
              {{person.zipcode}}
            </td>
            <td>
            <i @click="removePerson(person)" class="fa fa-trash pull-right"></i>
            </td>
        </tr>
      </tbody>
    </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import moment from 'moment'

export default {
  name: 'board-section',
  computed: {
    ...mapGetters({
      db: 'db',
      fb: 'fb',
      user: 'user'
    }),
    userId: function () {
      return this.user.uid
    }
  },
  data: function () {
    return {
      person: {
        firstname: '',
        lastname: '',
        dateofbirth: '',
        zipcode: ''
      }
    }
  },
  firebase: function () {
    return {
      persons: this.db.ref('persons').orderByChild('firstname')
    }
  },
  methods: {
    addPerson: function (person) {
      this.$firebaseRefs.persons.push(person)
      person.firstname = ''
      person.lastname = ''
      person.dateofbirth = ''
      person.zipcode = ''
    },
    removePerson: function (person) {
      this.$firebaseRefs.persons.child(person['.key']).remove()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fa-trash{ cursor: pointer }
</style>
