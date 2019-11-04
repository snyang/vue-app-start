import Vue, { VNode } from 'vue';
import Component from 'vue-class-component';
import {
	Header, Main, Footer, Aside, Container,
} from 'element-ui';
import MainMenu from './mainMenu';
import 'element-ui/lib/theme-chalk/index.css';
import './homePage.scss';

@Component
export default class Home extends Vue {
	render(): VNode {
		return this.$createElement(Container,
			{ props: { direction: 'vertical' } },
			[
				this.$createElement(Header,
					[
						this.$createElement('router-link', {
							props: {
								to: '/aaa',
							},
							domProps: {
								innerHTML: 'About',
							},
						}),
					]),
				this.$createElement(Container,
					[
						this.$createElement(Aside,
							[
								this.$createElement(MainMenu),
							]),
						this.$createElement(Main, {
							domProps: {
								innerHTML: 'Main',
							},
						},
						[
							this.$createElement('router-view'),
						]),
					]),
				this.$createElement(Footer, 'Footer'),
			]);
	}
}
