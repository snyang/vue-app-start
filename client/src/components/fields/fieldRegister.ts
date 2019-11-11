import Vue from 'vue';
// import InputField from './input/inputField';

export default class FieldRegister {

	static install(vue: typeof Vue): void {
		const requireComponent = require.context(
			// Look for files in the current directory
			'.',
			// Look in subdirectories
			true,
			// Only include "Field" postfixed .tsx files
			/[\w][(Field)(Form)]+\.tsx$/
		);

		// For each matching file name...
		requireComponent.keys().forEach((fileName) => {
			// Get the component config
			const componentConfig = requireComponent(fileName);
			// Get the PascalCase version of the component name
			const componentName = fileName
				// Remove path
				.replace(/^((.)*[\/\\])*/, '')
				// Remove the file extension from the end
				.replace(/\.\w+$/, '')
				// Split up kebabs
				.split('-')
				// Upper case
				.map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
				// Concatenated
				.join('');

			// Globally register the component
			Vue.component(componentName, componentConfig.default || componentConfig);
		});

	}
}

