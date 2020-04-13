import Vue from 'vue';
import Vuelidate from 'vuelidate';
import SimpleVueValidation from 'simple-vue-validator';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuelidate);
Vue.use(SimpleVueValidation);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
