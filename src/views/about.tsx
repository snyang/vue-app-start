import Vue, { VNode } from 'vue';
import Component from 'vue-class-component';

@Component
export default class About extends Vue {
	render(): VNode {
		return this.$createElement('div', 'About');
	}
}
