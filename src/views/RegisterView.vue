<template>
    <q-page class="flex flex-center">
        <q-card class="my-card q-pa-md" style="width: 500px">
            <q-card-section>
                <q-form @submit.prevent="submit" class="q-gutter-md">
                    <div>
                        <div class="text-h5">Register</div>
                        <div>Daftarkan akun baru.</div>
                    </div>

                    <div>
                        <q-input color="black" required outlined dense v-model="form.name" type="text"
                            :placeholder="form.role === 'user' ? 'Nama anda' : 'Nama perusahaan'" />
                    </div>
                    <q-input color="black" required outlined dense v-model="form.username" type="text"
                        placeholder="Username" />
                    <q-input color="black" required outlined dense v-model="form.email" type="email"
                        placeholder="Email" />
                    <q-input color="black" required outlined dense v-model="form.password" type="password"
                        placeholder="Password" />
                    <q-input color="black" required outlined dense v-if="form.password" v-model="passwordconfirm"
                        type="password" placeholder="Konfirmasi Password" />
                    <div v-if="registError" class="text-red text-caption">
                        {{ registError }}
                    </div>
                    <div class="border-2 text-center">
                        <div class="q-pb-sm">Daftar sebagai...</div>
                        <div class="q-gutter-md">
                            <q-radio dense color="dark" v-model="form.role" val="user" label="Pelamar Kerja" />
                            <q-radio dense color="dark" v-model="form.role" val="company" label="Perusahaan" />
                        </div>
                    </div>
                    <div>
                        <q-btn color="black" class="full-width" label="Daftar" no-caps type="submit" />
                    </div>
                    <div class="text-center">
                        <div>
                            <div>Sudah memiliki akun? <u><router-link :to="{ name: 'login' }" class="text-dark">Login</router-link></u></div>

                        </div>
                    </div>
                </q-form>
            </q-card-section>
        </q-card>
    </q-page>
</template>

<script>
    // import { ref } from "vue";
    import { mapActions } from "vuex";
    export default {
        name: "LoginView",
        data: () => ({
            form: {
                name: "",
                username: "",
                email: "",
                role: "user",
                password: "",
            },
            passwordconfirm: "",
            registError: null,
        }),
        methods: {
            ...mapActions({
                Regist: "auth/register",
            }),
            submit() {
                if (this.form.password.length < 8) {
                    this.registError = "Password minimal 8 karakter";
                    return;
                }
                if (this.form.password !== this.passwordconfirm) {
                    this.registError = "Password anda tidak sama";
                    return;
                }
                this.Regist(this.form)
                    .then(() => {
                        this.$router.replace({
                            name: "login",
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                        this.registError = error.response.data.message;
                    });
            },
        },
    };
</script>