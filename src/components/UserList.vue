<template>
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
</template>

<script>
export default{
 name: 'userlist',
 methods: {
   getUser: function(){
      return this.$http.get('http://localhost/demo/basic/web/rest/restusers');
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
