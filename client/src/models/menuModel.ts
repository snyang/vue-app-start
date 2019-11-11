export default interface MenuModel {
	label: string,
	name?: string,
	url?: string,
	icon?: string,
	subMenu? : MenuModel[]
}
