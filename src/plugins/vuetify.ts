import Vue from "vue";
import Vuetify, { VTextField } from "vuetify/lib";
Vue.use(Vuetify, {
  components: VTextField,
});
Vue.component("v-text-field", VTextField);
export default new Vuetify({});
