export default interface FieldModel {
	id: string,
	name: string,
	label: string,
	type: DisplayType | string,
	value?: any,
	disabled?: boolean,
	max?: number,
	min?: number,
	maxLength?: number,
	minLength?: number,
	pattern?: string,
	plackholder?: string,
	readonly?: boolean,
	required?: boolean,
	title?: string,
}

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input
 */
export enum DisplayType {
	button,				// A push button with no default behavior displaying the value of the value attribute, empty by default.
	checkbox, 		// A check box allowing single values to be selected/deselected.
	color, 				// A control for specifying a color; opening a color picker when active in supporting browsers.
	date, 				// A control for entering a date (year, month, and day, with no time) opening a date picker or numeric  wheels for month, hour, etc.,  when active in supporting browsers.. 		  HTML5
	'datetime-local', 	// A control for entering a date and time, with no time zone; opening a date picker or numeric wheels for month, day, and year,  when active in supporting browsers.
	email, 				// A field for editing an e-mail address. Looks like a text input, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.
	file, 				// A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select.
	hidden, 			// A control that is not displayed but whose value is submitted to the server. There is an example in the next column, but it's hidden!
	image, 				// A graphical submit button -- displaying an image defined with the src attribute. The alt attribute displays if the image src is missing.
	month, 				// A control for entering a month and year, with no time zone.
	number, 			// A control for entering a number; displays a spinner and adds default validation when supported. Displays a numeric keypad in some devices with dynamic keypads.
	password, 		// A single-line text field whose value is obscured. Will alert user if site is not secure
	radio, 				// A radio button, allowing a single value to be selected out of multiple choices with the same name value.
	range, 				// A control for entering a number whose exact value is not important; displays as a range widget defaulting to the middle value. Used in conjunction min And max to define the range of acceptable values. 		  HTML5
	reset, 				// A button that resets the contents of the form to default values. Not recommended.
	search, 			// A single-line text field for entering search strings. Line-breaks are automatically removed from the input value. May include a delete icon in supporting browsers that can be used to clear the field. Displays a search icon instead of enter key on some devices with dynamic keypads.
	submit, 			// A button that submits the form.
	tel, 					// A control for entering a telephone number. Displays a telephone keypad in some devices with dynamic keypads.
	text, 				// The default value. A single-line text field. Line-breaks are automatically removed from the input value.
	time, 				// A control for entering a time value with no time zone.
	url, 					// A field for entering a URL. Looks like a text input, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.
	week, 				// A control for entering a date consisting of a week-year number and a week number with no time zone.
}
