import * as _ from 'lodash';
import FieldDescription from '@/models/fieldDescription';
import BaseField from './baseField';

export default class BaseFieldStore<DescriptionT extends FieldDescription = any, ValueT = any>  {

	description: DescriptionT;
	originalValue?: ValueT;
	modified: boolean = false;

	constructor(public element: BaseField<DescriptionT, ValueT>) {
		this.description = element.description;
		this.resetValue(element.value ? element.value : element.internalValue);
	}

	public resetValue(value?: ValueT) {
		this.originalValue = _.cloneDeep(value);
		this.element.internalValue = value;
		this.modified = false;
	}

	public cancelEdit() {
		this.element.internalValue = _.cloneDeep(this.originalValue);
		this.modified = false;
	}

	public onChanged(value?: ValueT) {
		this.modified = true;
	}

	public get value(): ValueT | undefined {
		return this.element.internalValue;
	}

	public set value(value: ValueT | undefined) {
		if (value) {
			this.element.internalValue = value;
		} else {
			this.element.internalValue = this.element.defaultInternalValue;
		}
	}
}
