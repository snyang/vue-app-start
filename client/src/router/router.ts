import Vue from 'vue';
import VueRouter from 'vue-router';
import About from '../views/about';
import TestPage from '@/views/test/testPage';
import Home from '@/views/home/homePage';
import DefaultPage from '@/views/home/defaultPage';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: DefaultPage,
	},
	{
		path: '/about',
		component: About,
	},
	{
		path: '/test/:content',
		component: TestPage,
		props: true,
	},
];

const router = new VueRouter({
	// mode: 'history',
	base: '/',
	routes,
});

export default router;
