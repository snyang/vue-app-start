import Vue from 'vue';
import Component from 'vue-class-component';
import Home from './views/home/homePage';

@Component
export default class App extends Vue {
	render(h: any) {
		return (<Home />);
	}
}
