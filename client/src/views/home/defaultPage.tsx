import Vue from 'vue';
import Component from 'vue-class-component';
import ApplicationData from '@/data/applicationData';

@Component
export default class DefaultPage extends Vue {

	render(h: any): JSX.Element {
		const { menu } = ApplicationData;

		return (
			<div>Welcome</div>
		);
	}
}
