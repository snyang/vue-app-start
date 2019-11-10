import { Component } from 'vue-property-decorator';
import BaseField from './baseField';
import FieldDescription from '@/models/fieldDescription';
import InputField from '../input/inputField';
import FieldValueModel from '@/models/fieldValueModel';
import BaseFormStore from './baseFormStroe';

/**
 * Features:
 * - Form / Sections / Fields
 * - Initialize/Render form fields
 * - Support Save / Cancel
 * - Support Dependency
 */
@Component
export default class BaseForm extends BaseField<FieldDescription, FieldValueModel> {

	store!: BaseFormStore;

	createStore() {
		this.store = new BaseFormStore(this);
	}

	renderField(h: any, description: FieldDescription): JSX.Element {
		const { value } = this.store;
		return (
			<InputField.name
				ref={description.id}
				description={description}
				value={value ? value.valueMap.get(description.id) : undefined}
			/>
		);
	}

	render(h: any): JSX.Element {
		return (
			<div>
				{this.description.fields && this.description.fields.map(field => {
					return this.renderField(h, field);
				})}
			</div>
		);
	}
}
