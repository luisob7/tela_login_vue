// src/plugins/vuetify.js
import 'vuetify/styles'; // Importando os estilos do Vuetify
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default createVuetify({
  components,
  directives,
});
