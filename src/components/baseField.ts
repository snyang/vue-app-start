import Vue from 'vue';
import InputField from './input/inputField';

export default class BaseField {
	
	static install(vue: typeof Vue): void {
		Vue.use(InputField)
	}	
}
