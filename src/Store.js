import { defineStore } from "pinia";

export const useStore = defineStore('store', {
    state: () => {
        return {
            usuario:'',
            senha:'',
        }
    },

    actions: {
        registro(user, password){
            this.usuario = user;
            this.senha = password;
        }
    },

    getters: {
        getRegistro() {
            return ('Usuario: '+this.usuario+' Senha: '+this.senha);
        }
    }
});