<template>
  <v-container class="d-flex justify-center align-center fill-height" style="background-color: rgb(116, 206, 236);">
    <v-card width="660" class="pa-4" color="rgb(116, 206, 236)">
      <v-form @submit.prevent="login">
        <v-text-field
          v-model="formularioLogin.usuario"
          class="custom-field"
          label="Usuário"
        />
        <br>
        <v-text-field
          v-model="formularioLogin.senha"
          label="Senha"
          type="password"
          class="custom-field"
        />
        <br>
        <v-btn type="submit" color="rgb(6, 65, 65)" block>
          Realizar Login
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import {useStore} from '/src/Store.js';

export default {

    data() {
        return {
            formularioLogin: {
                usuario: "",
                senha: "",
            },
            validade: false,
            userValido: false,
            passwordValida: false
        };
    },
    methods: {
        login() {
            this.validade = this.validarLogin();
            if (this.validade) {
                const store = useStore();
                store.registro(this.formularioLogin.usuario, this.formularioLogin.senha);
                this.limparCampos();
                alert("Login realizado com sucesso!");
            } else {
                this.reconhecerErro();
            }
        },
        validarLogin() {
            this.userValido = this.validarUsuario(this.formularioLogin.usuario);
            this.passwordValida = this.validarSenha(this.formularioLogin.senha);
            if (this.userValido && this.passwordValida) {
                return true;
            } else {
                return false;
            }
        },
        validarUsuario(login) {
            if (login != undefined && login.trim() !== ''){
                return true;
            } else {
                return false;
            }
        },
        validarSenha(password) {
            if (password != undefined && password.trim() !== '' && !password.includes(' ')){
                return true;
            } else {
                return false;
            }
        },
        reconhecerErro() {
            if (this.userValido) {
                alert("Por favor, informe sua senha.");
            } else if (this.passwordValida) {
                alert("Por favor, informe seu usuário.");
            } else {
                alert("Por favor, informe seu usuário e sua senha.");
            }
        },
        limparCampos() {
            this.formularioLogin.usuario = "";
            this.formularioLogin.senha = "";
        }
    }
};
</script>

<style>
html, body {
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(42, 64, 71);
}
</style>
