import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import TestPageData from '@/data/testPageData';
import FieldDescription from '@/models/fieldDescription';
import BaseForm from '@/components/fields/base/baseForm';

@Component({
	props: {
		content: String,
	},
})
export default class TestPage extends Vue {

	field: FieldDescription = TestPageData.model;
	value = TestPageData.testValue;

	// values: any = {};

	// onChanged(id: string, value: any): void {
	// 	if (!id || !this.$refs[id]) {
	// 		return;
	// 	}
	// 	const field = (this.$refs[id] as BaseField<any, any>);
	// 	console.log(field.store.value);
	// 	console.log(this.values[id].value);
	// 	// field.store.value = 'aaas';
	// }

	// renderField(h: any, fieldModel: FieldDescription): JSX.Element {
	// 	if (!this.values[fieldModel.id]) {
	// 		this.values[fieldModel.id] = { value: '' };
	// 	}
	// 	const valueObject: { value: any } = this.values[fieldModel.id];
	// 	const that = this;
	// 	const onInput = function (id: string, value: any) {
	// 		that.onChanged(id, value);
	// 	}
	// 	return (
	// 		<InputField.name
	// 			ref={fieldModel.id}
	// 			description={fieldModel}
	// 			on-input={(e: any) => { onInput(fieldModel.id, e) }}
	// 			v-model={valueObject.value}
	// 		/>
	// 	)
	// }

	render(h: any): JSX.Element {
		return (
			<BaseForm.name
				description={this.field}
				value={this.value}
			/>
		);
	}
}
