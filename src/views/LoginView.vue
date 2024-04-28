<template>
  <q-page class="flex flex-center">
    <q-card class="my-card q-pa-md" style="width: 500px;">
      <q-card-section>
        <q-form @submit.prevent="submit" class="q-gutter-md">
          <div>
            <div class="text-h5">Sign In</div>
            <div>Masuk ke akun anda.</div>
          </div>
          <q-input color="black" required outlined dense v-model="form.username" type="text" placeholder="Username" />
          <q-input color="black" required outlined dense v-model="form.password" type="password" placeholder="Password" />
          <div v-if="loginError" class="text-red text-caption">Username atau Password salah. <router-link class="text-dark">Lupa Password?</router-link></div>
          <div>
            <q-btn color="black" class="full-width" label="Sign In" no-caps type="submit" />
          </div>
          <div class="text-center">
            <div>Belum memiliki akun? <u><router-link :to="{ name: 'register' }" class="text-dark">Register</router-link></u> atau <u><router-link :to="{ name: 'landing' }" class="text-dark">Beranda</router-link></u>.</div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    name: "LoginView",
    data: () => ({
      form: {
        username: "",
        password: "",
      },
      loginError: null,
    }),
    methods: {
      ...mapActions({
        signIn: "auth/signIn",
      }),
      submit() {
        this.signIn(this.form).then((response) => {
          console.log("signed in");
          console.log(response)
          this.$router.push({
            name: "dashboard",
          });
          
        }).catch((error) => {
          console.log(error);
          this.loginError = 'true'
        });
      },
    },
  };
</script>