<template lang="">
  <q-header class="my-header bg-dark row items-center q-pa-lg">
    <div class="col">
      <router-link class="text-white clearfont" :to="{ name: 'landing' }">
        EXAMPLE-APP
      </router-link>
    </div>
    <div class="col justify-center">
      <div class="text-h6">
        {{ name }}
      </div>
    </div>
    <div class="col justify-end"> 
      <q-btn v-if="show && sessionRole" color="standard" flat label="Dashboard" @click="toDashboard" />
      <q-btn v-if="sessionRole" flat color="standard" icon="logout" label="Logout" @click="signingOut" />
      <q-btn v-if="!sessionRole" flat color="standard" icon="login" label="Login" @click="toLogin"/>
    </div>
  </q-header>
</template>
<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    props: {
      name: String,
      show: String,
    },
    computed: {
      ...mapState('auth', {
        sessionRole: state => state.user ? state.user.user.role : null
      }),
    },
    methods: {
      ...mapActions({
        signOut: "auth/logout",
      }),
      // refresh the page after
      signingOut(){
        this.signOut().then(() => {
          console.log("signed out")
          window.location.reload();
        });
      },
      toLogin(){
        this.$router.push({ name: 'login'});
      },
      toDashboard(){
        this.$router.push({ name: 'dashboard'})
      }
    },
}
</script>
<style>
  .my-header > * {
    display: flex;
  }
</style>