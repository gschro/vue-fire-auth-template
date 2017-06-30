<template>    
  <div>  
  <h2>Add Person</h2>
  <form>    
    <div class="form-group">
      <label for="boardName">First Name*</label>
      <input type="text" id="boardName" class="form-control" v-model="person.firstname">
    </div>        
    <div class="form-group">
      <label for="boardName">Last Name*</label>
      <input type="text" id="boardName" class="form-control" v-model="person.lastname">
    </div>  
    <div class="form-group">
      <label for="boardName">Date of Birth</label>
      <input type="date" id="boardName" class="form-control" v-model="person.dateofbirth">
    </div>  
    <div class="form-group">
      <label for="boardName">Zip Code*</label>
      <input type="number" id="boardName" class="form-control" v-model="person.zipcode">
    </div>       
    <button @click.prevent="addPerson(person)" class="btn btn-success marginb"><i class="fa fa-plus"></i> Add</button> 

  </form>  
  <ul class="error-list">
    <li v-show="!addValidation.firstname">First Name is required</li>
    <li v-show="!addValidation.lastname">Last Name is required</li>
    <li v-show="!addValidation.dateofbirth">Date of Birth is required</li>
    <li v-show="!addValidation.zipcode">Zip Code is required</li>
  </ul>

  <h2>Persons</h2>
  <button v-if="editPerson" @click.prevent="toggleEdit" class="btn btn-success marginb"><i class="fa fa-eye"></i> View</button> 
  <button v-else @click.prevent="toggleEdit" class="btn btn-success marginb"><i class="fa fa-pencil"></i> Edit</button>
  <div v-show="saved" class="alert alert-success"><strong>Saved!</strong></div>
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
              <input type="text" class="form-control" v-model="person.firstname" v-if="editPerson"/>
              <template v-else>
              {{person.firstname}}
              </template>
            </td>
            <td>
              <input type="text" class="form-control" v-model="person.lastname" v-if="editPerson"/>
              <template v-else>
              {{person.lastname}}
              </template>
            </td>
            <td>
              <input type="date" class="form-control" v-model="person.dateofbirth" v-if="editPerson"/>
              <template v-else>
              {{person.dateofbirth}}
              </template>
            </td>
            <td>
              <input type="number" class="form-control" v-model="person.zipcode" v-if="editPerson"/>
              <template v-else>
              {{person.zipcode}}
              </template>
            </td>
            <td>
            <i @click="removePerson(person)" class="fa fa-trash pull-right" v-if="editPerson"></i>
            <i @click="updatePerson(person)" class="fa fa-floppy-o pull-right" v-if="editPerson"></i>            
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
    },
    editPerson: function () {
      return this.edit
    },
    addValidation: function () {
      return {
        firstname: !!this.person.firstname,
        lastname: !!this.person.lastname,
        dateofbirth: !!this.person.dateofbirth,
        zipcode: !!this.person.zipcode && this.person.zipcode.length > 4
      }
    },
    isValid: function () {
      var validation = this.addValidation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  },
  data: function () {
    return {
      person: {
        firstname: '',
        lastname: '',
        dateofbirth: '',
        zipcode: ''
      },
      edit: false,
      saved: false
    }
  },
  firebase: function () {
    return {
      persons: this.db.ref('persons').orderByChild('firstname')
    }
  },
  methods: {
    addPerson: function (person) {
      if (this.isValid) {
        this.$firebaseRefs.persons.push(person)
        person.firstname = ''
        person.lastname = ''
        person.dateofbirth = ''
        person.zipcode = ''
      }
    },
    toggleEdit: function () {
      this.edit = !this.edit
    },
    updatePerson: function (person) {
      person = {...person}
      var key = '' + person['.key']
      delete person['.key']
      this.$firebaseRefs.persons.child(key).set(person)
      this.saved = true
      var that = this
      setTimeout(function () {
        that.saved = false
      }, 3000)
    },
    removePerson: function (person) {
      this.$firebaseRefs.persons.child(person['.key']).remove()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fa-trash, .fa-floppy-o{ cursor: pointer }
.error-list {
  color: red;
}
.alert {
  display: inline-block;
  margin-left: 20px;
}
</style>
