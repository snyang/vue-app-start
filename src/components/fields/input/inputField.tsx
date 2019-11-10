import {
	Input
} from 'element-ui';
import { Component} from 'vue-property-decorator';
import BaseField from '../base/baseField';
import FieldDescription from '@/models/fieldDescription';

@Component
export default class InputField extends BaseField<FieldDescription, string> {
	// important: need to provide a default value.
	defaultInternalValue = '';

	render(h: any): JSX.Element {
		const description  = this.description;

		return (
			<div>
				<label for={description.id}>{description.label}</label>
				<Input.name
					id={description.id}
					type={description.type}
					default={description.defaultValue}
					disabled={description.disabled}
					maxlength={description.maxLength}
					minlength={description.minLength}
					readonly={description.readonly}
					max={description.max}
					min={description.min}
					autofocus={description.autofocus}
					placeholder={description.placeholder}
					v-model={this.internalValue}
				>
				</Input.name>
			</div>
		);
	}
}
