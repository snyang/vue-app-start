import MenuModel from '@/models/menuModel';

export default class ApplicationData {
	static get menu(): MenuModel[] {
		const data: MenuModel[] = [];
		const subMenu = {
			icon: 'el-icon-location',
			label: 'Navigator One',
			url: '1',
			subMenu: [
				{
					label: 'Group One',
					subMenu: [
						{
							url: '/test/item-one',
							label: 'item one',
						},
						{
							url: '/test/item-two',
							label: 'item two',
						}
					],
				}
			],
		};
		data.push(subMenu);
		return data;
	}
}
