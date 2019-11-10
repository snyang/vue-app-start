import FieldDescription from '@/models/fieldDescription';
import { FieldType } from '@/models/fieldType';
import { InputType } from '@/models/inputType';
import { PageFieldType } from '@/models/pageFieldType';
import FieldValueModel from '@/models/fieldValueModel';

export default class TestPageData {
	static get model(): FieldDescription {
		const fields: FieldDescription[] = [];
		fields.push({
			id: 'id',
			label: 'Id:',
			fieldType: FieldType.input,
			type: InputType.text,
			placeholder: 'Input your id here',
		});

		fields.push({
			id: 'date',
			label: 'Date:',
			fieldType: FieldType.input,
			type: InputType.date,
			placeholder: 'Input your date here',
		});

		const data: FieldDescription = {
			id: 'form',
			label: 'Date:',
			fieldType: PageFieldType.view,
			fields
		};
		return data;
	}

	static get testValue(): FieldValueModel {

		const data: FieldValueModel = {
			id: 'form',
			valueMap: new Map<string, any>(),
			modifiedIds: [],
			lastModifiedDate: new Date(),
		};
		data.valueMap.set('id', 'abc');
		data.valueMap.set('date', '2019-10-02');
		return data;
	}
}
