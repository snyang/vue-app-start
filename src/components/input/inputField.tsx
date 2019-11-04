import Vue from 'vue';
import Component from 'vue-class-component';
import {
	Input
} from 'element-ui';
import { Provide } from 'vue-property-decorator';


@Component(
	{
		props: {
			id: String,
			placeholder: String
		}
	}
)
export default class InputField extends Vue {
	name: string = 'inputField';
	componentName = 'InputField';

	static install(vue: typeof Vue): void {
		Vue.component(InputField.name, InputField);
	}

	@Provide()
	text: string = '';

	render(h: any): JSX.Element {
		return (
			<div>
				<label for={this.$props.id}>{this.text}</label>
				<Input.name
					id={this.$props.id}
					placeholder={this.$props.placeholder}
					v-model={this.text}
					label={this.text}
				>
				</Input.name>
			</div>
		)
	}
}
