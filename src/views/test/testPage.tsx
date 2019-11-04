import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import InputField from '../../components/input/inputField';

@Component({
	props: {
		content: String,
	},
})
export default class TestPage extends Vue {

	render(h: any): JSX.Element {
		return (
			<InputField.name
				id={'id-1'}
				placeholder={this.$props.content}
			/>
		)
	}
}
