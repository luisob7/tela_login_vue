module.exports = {
    vueCompilerOptions: {
      isCustomElement(tag) {
        // Adicione os nomes das tags dos seus custom elements aqui
        return tag.startsWith('v-'); // Exemplo: considere como custom elements todas as tags que começam com "v-"
      },
    },
  };
  