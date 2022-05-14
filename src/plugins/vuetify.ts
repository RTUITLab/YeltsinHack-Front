import Vue from "vue";
import Vuetify, { VTextField, VBtn } from "vuetify/lib";
Vue.use(Vuetify, {
  components: VTextField,
});
Vue.component("v-text-field", VTextField);
Vue.component("v-btn", VBtn);
export default new Vuetify({});
