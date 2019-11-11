import FieldDescription from '@/models/fieldDescription';
import FieldValueModel from '@/models/fieldValueModel';
import BaseFieldStore from './baseFieldStore';
import BaseForm from './baseForm';

export default class BaseFormStore extends BaseFieldStore<FieldDescription, FieldValueModel>{
	refs!: { [key: string]: any };

	constructor(public element: BaseForm) {
		super(element);
		this.refs = element.$refs;
	}

	getFieldStore(id: string): BaseFieldStore {
		return this.refs[id] as BaseFieldStore;
	}



}