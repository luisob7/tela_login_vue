<template>
    <div class="container">
        <form @submit.prevent="login">
            <label style="color: rgb(6, 65, 65)">Usuário</label>
            <input type="text" v-model="usuario" />

            <label style="color: rgb(6, 65, 65)">Senha</label>
            <input type="password" v-model="senha" />

            <button type="submit">Realizar Login</button>
        </form>
    </div>
</template>

<script>
import {useStore} from '/src/Store.js';

export default {

    data() {
        return {
            usuario: "",
            senha: "",
            validade: false,
            userValido: false,
            passwordValida: false
        };
    },
    methods: {
        login() {
            this.validade = this.validarLogin();
            if (this.validade) {
                this.limparCampos();
                alert("Login realizado com sucesso!");
            } else {
                this.reconhecerErro();
            }
        },
        validarLogin() {
            this.userValido = this.validarUsuario(this.usuario);
            this.passwordValida = this.validarSenha(this.senha);
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
            this.usuario = "";
            this.senha = "";
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
.container {
    background-color: rgb(116, 206, 236);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    width: 660px;
    padding: 20px;
    border: 2px solid rgb(6, 65, 65);
    border-radius: 20px;
    text-align: center;
}
input {
    display: block;
    width: 90%;
    margin: 10px auto;
    padding: 8px;
    font-size: 20px;
    text-align: center;
    border-radius: 10px;
}
button {
    background-color: rgb(6, 65, 65);
    color: white;
    width: 150px;
    font-size: 20px;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
}
</style>
