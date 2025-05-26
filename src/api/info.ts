// app/api/info.ts
import { InfoItem } from '../types/info';

export async function getInfo(): Promise<InfoItem[]> {
  return [
    {
      id: 1,
      icon: 'TbTruckDelivery',
      title: 'Entrega rápida',
      desc: 'Lorem ipsum orem ipsum orem ipsum orem ipsumorem ipsumorem ipsum.',
    },
    {
      id: 2,
      icon: 'GiPadlock',
      title: 'Segurança na compra',
      desc: 'Lorem ipsum orem ipsum orem ipsum orem ipsumorem ipsumorem ipsum.',
    },
    {
      id: 3,
      icon: 'RiMoneyDollarBoxLine',
      title: 'Garantia do produto',
      desc: 'Lorem ipsum orem ipsum orem ipsum orem ipsumorem ipsumorem ipsum.',
    },
    {
      id: 4,
      icon: 'ImCheckboxChecked',
      title: 'Pagamento Seguro',
      desc: 'Lorem ipsum orem ipsum orem ipsum orem ipsumorem ipsumorem ipsum.',
    },
    {
      id: 5,
      icon: 'IoCardOutline',
      title: 'Parcelamento',
      desc: 'Lorem ipsum orem ipsum orem ipsum orem ipsumorem ipsumorem ipsum.',
    },
    {
      id: 6,
      icon: 'BsBox2',
      title: 'Ótimo Frete',
      desc: 'Lorem ipsum orem ipsum orem ipsum orem ipsumorem ipsumorem ipsum.',
    },
  ];
}
