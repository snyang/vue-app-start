import { FieldType } from './fieldType';
import { PageFieldType } from './pageFieldType';
import { InputType } from './inputType';

export default interface FieldDescription {
	id: string,
	label: string,
	fieldType: FieldType | PageFieldType | string,
	fields?: FieldDescription[],
	type?: InputType | string,
	defaultValue?: any,
	required?: boolean,
	readonly?: boolean,
	disabled?: boolean,
	hidden?: boolean,
	max?: number,
	min?: number,
	maxLength?: number,
	minLength?: number,
	pattern?: string,
	placeholder?: string,
	title?: string,
	autofocus?: boolean,
}
