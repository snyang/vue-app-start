import Vue from 'vue';
import Component from 'vue-class-component';
import {
	Menu, Submenu, MenuItemGroup, MenuItem,
} from 'element-ui';
import ApplicationData from '@/data/applicationData';
import MenuModel from '@/models/menuModel';

@Component
export default class MainMenu extends Vue {

	renderIcon(h: any, iconName: string): JSX.Element {
		return (
			<i class={iconName} />
		);
	}

	renderMenuItem(h: any, item: MenuModel): JSX.Element {
		return (
			<MenuItem.name index={item.url}>
				{item.icon && this.renderIcon(h, item.icon)}
				{item.label}
			</MenuItem.name>
		);
	}

	renderMenuGroup(h: any, item: MenuModel): JSX.Element {
		return (
			<MenuItemGroup.name title={item.label}>
				{item.subMenu && item.subMenu.map(value => this.renderMenuItem(h, value))}
			</MenuItemGroup.name>
		);
	}

	renderSubMenu(h: any, item: MenuModel): JSX.Element {
		return (
			<Submenu.name index={item.url}>
				{item.icon && this.renderIcon(h, item.icon)}
				{item.label}
				{item.subMenu && item.subMenu.map(value => this.renderMenuGroup(h, value))}
			</Submenu.name>
		);
	}

	render(h: any): JSX.Element {
		const { menu } = ApplicationData;

		return (<Menu.name router={true}>
			{menu.map(item => this.renderSubMenu(h, item))}
		</Menu.name>
		);
	}
}
