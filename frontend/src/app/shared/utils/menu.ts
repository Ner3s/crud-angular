import { IMenu } from "../models/menu.model";

const AdminMenu: IMenu[] = [
  {
    icon: 'home',
    label: 'Início',
    link: '/'
  },
  {
    icon: 'storefront',
    label: 'Produtos',
    link: '/products'
  }
]

export { AdminMenu };
