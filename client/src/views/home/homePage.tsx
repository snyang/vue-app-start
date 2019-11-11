import Vue from 'vue';
import Component from 'vue-class-component';
import {
	Header, Main, Footer, Aside, Container,
} from 'element-ui';
import MainMenu from './mainMenu';
import 'element-ui/lib/theme-chalk/index.css';
import './homePage.scss';

@Component
export default class Home extends Vue {
	render(h: any): JSX.Element {
		return (
			<Container.name
				direction={'vertical'}
			>
				<Header.name>
					<router-link to='/'>Home</router-link>
				</Header.name>
				<Container.name>
					<Aside.name >
						<MainMenu />
					</Aside.name>
					<Main>
						{'Main'}
						<router-view />
					</Main>
				</Container.name>
				<Footer>Footer</Footer>
			</Container.name>
		)
	}
}
