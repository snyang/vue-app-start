import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './app';
import router from './router/router';
import store from './store';
import BaseField from './components/baseField';

Vue.config.productionTip = false;
Vue.use(ElementUI);
BaseField.install(Vue);

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
