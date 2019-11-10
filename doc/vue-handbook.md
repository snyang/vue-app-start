# Vue Handbook

## Development a Vue Component
### Rules in this project
- No .vue files.
- Use a .tsx file for a component.
- Use decorator from `vue-property-decorator`.
- Do not use the Vue template syntax.
- Provide stories of the storebook for a component.

### Basic Knowledge
#### Concepts
- props: are the component's custom properties.
- attrs: will replace attributes in the component's root element.
  please see [doc](https://vuejs.org/v2/guide/components-props.html#Non-Prop-Attributes).

#### References
Please see
- [Vue Introduction](https://vuejs.org/v2/guide)
- [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)
  Based on `vue-class-component`, provided rich features.
- [vue-class-component document](https://github.com/vuejs/vue-class-component)

#### Vue
- props: for data passed from the parent component.
- data: must be a function return an instance of state in the component
- computed: for calculated value based on `props` and `data` 
  A computed property will only re-evaluate when some of its reactive dependencies have changed.
- methods: mainly for methods that would change `data`.
  A method invocation will always run the function whenever a re-render happens.
- watch: like an event `onNameChanged(value, newValue)` of when a data changed.
- [model](https://vuejs.org/v2/api/#model): customize `v-model` default behavior.
- [`vm.$emit`](https://vuejs.org/v2/api/#vm-emit): trigger an event on the current instance.
- [ref](https://vuejs.org/v2/api/#vm-refs): provide a reference of a specific component.
- [provide / reject](https://vuejs.org/v2/api/#provide-inject): help the parent component to inject properties into its descendants.
- template: we do not know it.

### Decorator
| Decorator        | Equivalent to               |
| ---------------- | --------------------------- |
| @Prop readonly   | props                       |
| @PropSync        | props + computed + emit     |
| instance fields  | data                        |
| instance getter  | computed                    |
| instance methods | methods                     |
| @Emit            | methods + emit              |
| @Inject          | inject                      |
| @Provide         | provide                     |
| @InjectReactive  | reactive version of inject  |
| @ProvideReactive | reactive version of provide |
| @Watch           | watch                       |
| @Model           | model                       |
| @Ref             | computed + this.$refs       |

####　`@Component`
- avoid provide scripts inside, use other decorator.

Sample:
```ts
@Component
export default class InputField extends Vue
```

### Register
- Global Register (**Recommended**)
	This is the default behavior, you need do nothing.
	The behavior is that registering all components whose file name is end of `Field.tsx` in `src/components`
	use [Field Register Class](../src/components/fieldRegister.ts).

- Local register (In case you need)
	- Implement a `static  install()` in your component class
```ts
// In your component class
export default class InputField extends Vue {
	static componentName: string = 'InputField';
	static install(vue: typeof Vue): void {
		Vue.component(InputField.componentName, InputField);
	}
	...
}
```

- - Register your component.

```ts
// In the main.ts or encapsulated in a specific place.
import InputField from './input/inputField';
...
		Vue.use(InputField);
...
```

### `@Prop`
- For properties from the parent component

Defintion, in the component code:
```ts
	// declare
	@Prop(String) readonly id: string | undefined;

	// use, method 1: use this.fieldName
	render(h: any): JSX.Element {
		return (
			<div id={this.id} />
	}

	// use, method 2: use this.$props
	render(h: any): JSX.Element {
		return (
			<div id={this.$props.id} />
	}
```

Usage, in the parent component:
Method 1: Pure JSX (**Recommended**):
```ts
	render(h: any): JSX.Element {
		return (
			<InputField.name
				id={'id-1'}
			/>
		)
	}
```

Method 2: Vue component:
```ts
	render(h: any): JSX.Element {
		return (
			<InputField
				props={
					{
						id: 'id-1',
					}
				}
			/>
		)
	}
```

### Component Events
No idea how to implement events via property functions.
This is an emit way implementation.

- Using emit
Note: the emit event is a string `eventname`, and use `on-eventname` to listen.

Defintion, in the component code:
```ts
	@Watch('value')
	onValueChanged(value: any, oldValue: any) {
			this.$emit('changed', value, oldValue);
	}
```

Method 1: Pure JSX (**Recommended**):
```ts
	onChanged(value: any, oldValue: any): void {
		console.log(value);
	}

	render(h: any): JSX.Element {

		return (
			<InputField.name
				on-changed={this.onChanged}
			/>
		)
	}
```

## props, value and state
Value: easy to determined what kind of data should be set.
Props, we call it description in some time.
State, Data only be changed inside, may

For the parent component, and the child component
| Data  | Who init | Who read | Who change | Example  |
| ----- | -------- | -------- | ---------- | -------- |
| value | parent   | both     | both       | value    |
| props | parent   | both     | both       | id       |
| state | child    | both     | child      | modified |

## Questions I do not know
- Q: How to pass a function via props?
