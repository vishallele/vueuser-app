<template>

<div>
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Add User</h3>
  </div>
  <div class="panel-body">
    <form v-on:submit.prevent="addUser">
      <div class="form-group">
	 <label for="frmFirstName">First Name</label>
	 <input type="text" class="form-control" id="frmFirstName" v-model="newUser.first_name" placeholder="Enter first name">
     </div>
     <div class="form-group">
	 <label for="frmLastName">Last Name</label>
	  <input type="text" class="form-control" id="frmLastName" v-model="newUser.last_name" placeholder="Enter last name">
     </div>
      <div class="form-group">
	 <label for="frmEmail">Email Address</label>
	  <input type="text" class="form-control" id="frmEmail" v-model="newUser.email" placeholder="Enter email address">
     </div>
     <div class="form-group">
	 <label for="frmPassword">Password</label>
	  <input type="password" class="form-control" id="frmPassword" v-model="newUser.password" placeholder="Enter password">
     </div>
     <button type="submit" class="btn btn-primary">Submit</button>
   </form>
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">All Users</h3>
  </div>
  <div class="panel-body">
    <table class="table table-striped">
       <thead>
          <thead>
	    <tr>
	      <th>First Name</th>
	      <th>Last Name</th>
	      <th>Email</th>
	    </tr>
  	</thead>
       </thead>
       <tbody>
         <tr v-for="u in users">
            <td>{{u.first_name}}</td>
            <td>{{u.last_name}}</td>
            <td>{{u.email}}</td>
         </tr>
       </tbody> 
    </table>
  </div>
</div>
</div>

</template>

<script>

export default{
 name: 'user',
 data () {
   return {
      newUser: {
        first_name: '',
        last_name: '',
        email: '',
        password: '' 
      }
   }
 },
 methods: {
   addUser: function(){
      this.$http.post('http://localhost/demo/basic/web/rest/restusers',this.newUser).then( response => {
        this.$store.dispatch('ADD_NEW_USER',response.body); 
        this.clearUserForm();
      }, response => {
	console.log(response);
     });
   },
   getUser: function(){
      return this.$http.get('http://localhost/demo/basic/web/rest/restusers');
   },
   clearUserForm: function() {
	this.newUser.first_name = '';
	this.newUser.last_name = '';
	this.newUser.email = '';
	this.newUser.password = '';   
   }		
 },
 created: function() {
    this.getUser().then(response => {
       this.$store.dispatch('USER_RECEIVED',response.body);
    });
 },
 computed: {
   users () {
       return this.$store.getters.getUser;	
   }
 }	
}
</script>
