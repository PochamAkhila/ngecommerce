import { MenuItemEnum } from "../enums/menu-item-enum";

export interface MenuItem {
    title: String;
    link: String;
    className: String;
    abcd ?: MenuItemEnum.propertyA;
}
  