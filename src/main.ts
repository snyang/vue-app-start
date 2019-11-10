import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './app';
import router from './router/router';
import store from './store';
import FieldRegister from './components/fields/fieldRegister';

Vue.config.productionTip = false;
Vue.use(ElementUI);
FieldRegister.install(Vue);

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
