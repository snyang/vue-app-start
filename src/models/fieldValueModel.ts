export default interface FieldValueModel {
	id: string,
	valueMap: Map<string, any>,
	modifiedIds: string[],
	lastModifiedDate: Date,
}
