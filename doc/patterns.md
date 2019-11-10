# Patterns

## MVVM Extension Pattern
3## Features

- [UI] Describable UI elements
- [UI] UI input validation
- [UI] UI attributes dependency
  - hidden
  - required
  - readonly
  - ...

- [UI.data] UI data lifecycle
  - Load
  - Edit
  - Cancel
  - Save

- [Data] Data lifecycle
  - New(Header)
  - Create
  - Update
  - Read
  - Delete

### Pattern Roles

- Model: data
  Entity is the data in persistence form.
	Model is the data in transition form.
- View: UI presentation and render
- ViewModel:
  - control UI attributes, events
  - data operation

- View Description: UI element infomation
- View Builder:
  - build a view based on a view description
  - onChanged
    - View.onChanged -> ViewBuilder.onChanged -> ViewModel.onChanged -> ViewModel.parent.onChanged
  - setValue (load or cancel)
    - ViewModel.setValue -> ViewMode.children.setValue -> View.render

- Form

### Implementation Details

| Pattern Role      | Naming               |
| ----------------- | -------------------- |
| View Description  | *FieldDescription    |
| Model             | FieldValueModel      |
| View (element)    | *Field               |
| View (collection) | *{Form  &#x7C; Page} |
| View Model        | *FieldStore          |

### Design

#### Field Description
- Field Description
  - id
  - label
  - fields
	- ...

#### View
- BaseField
  - description
  - model
  - onChanged
  - render

- BaseCollectionField (collection pattern)
  - viewInfo.children

- FieldValueModel
  - id
  - modifiedDate
  - value
  - modified
  - (collection) value:Map<id, value>
  - (collection) modifiedIds[id]

## Field: Collection/Children pattern
### Requirements
- value: can be initialized
- value: is editable inside
- value: can be initialized from outside via props
- value: can be get/set from ref.value
- value: can be get/set from store.value?
- value: can be get from onChanged
- value: support v-model, default prop: value, default event: input

### Candidate solutions
#### # Solution 1: via ref
- parent prepares a store and pass it via props.
- value is any type in the store, and set to field.value in mounted mehtod.
- field.value is the model of field
- parent uses the ref to access the field.value.

#### # Solution 2: via store
- parent prepares a store and pass it via props.
- value is an object in the store, and set to field.value in mounted mehtod.
- field.value is the model of field
- parent uses the store to access value.

#### # Solution 3: via onChanged
- parent prepares a store and pass it via props.
- value is an type in the store, and set to field.value in mounted mehtod.
- field.value is the model of field.
- field.value is watched by a onValueChanged function.
- parent listens the onChange event.

## References
- [Adding v-model Support to Custom Vue.js Components](https://alligator.io/vuejs/add-v-model-support/)
