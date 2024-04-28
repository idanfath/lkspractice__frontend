<template>
  <HeaderComp name="Dashboard"></HeaderComp>
  <q-page class="flex flex-center">
    <div v-if="this.sessionRole === 'user'">success as {{this.sessionRole}}</div>

    <div v-else-if="this.sessionRole === 'admin'">success as {{this.sessionRole}}</div>
    <div v-else-if="this.sessionRole === 'company'">success as {{this.sessionRole}}</div>
    <div v-else>Contact admin. You're not supposed to see this.</div>
  </q-page>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import HeaderComp from '@/components/HeaderComp.vue';

export default {
  name: "HomeView",
  components: {
    HeaderComp
  },
  computed: {
    ...mapState('auth', {
      sessionRole: state => state.user ? state.user.user.role : null
    }),
  },
};
</script>
