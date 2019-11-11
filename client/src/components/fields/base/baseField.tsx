import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import FieldDescription from '@/models/fieldDescription';
import BaseFieldStore from './baseFieldStore';

const Event_Input = 'input';

/**
 * The component
 * - can get value via (ref.store.value, v-model, on-input, ref.internalValue)
 * - can set value via (ref.store.value, v-model, ref.internalValue)
 */
@Component
export default class BaseField<DescriptionT extends FieldDescription, ValueT = any> extends Vue {

	@Prop(Object) readonly description!: DescriptionT;
	@Prop() readonly value?: ValueT;

	store!: BaseFieldStore<DescriptionT, ValueT>;
	defaultInternalValue?: ValueT;
	internalValue?: ValueT;

	constructor() {
		super();
		this.createStore();
		this.internalValue = this.value;
	}

	createStore() {
		this.store = new BaseFieldStore<DescriptionT, ValueT>(this);
	}

	// Support v-model
	@Watch('internalValue', { deep: true, immediate: true })
	onValueChanged(value: any, oldValue: any): void {
		this.store.onChanged(value);
		if (this.$listeners[Event_Input]) {
			this.$emit(Event_Input, value);
		}
	}

}
