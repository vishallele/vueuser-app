<template>

<div>
 <div class="col-md-6">
    <adduserform></adduserform>
 </div>
 <div class="col-md-6">
    <userlist></userlist>	
 </div>
</div>

</template>

<script>
import adduserform from './AddUserForm';
import userlist from './UserList';

export default{
 name: 'user',
 components: {
   adduserform,
   userlist
 },	
}
</script>
