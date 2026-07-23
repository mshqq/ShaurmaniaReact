import MenuItem from './MenuItem';
import type { menuItem } from './Menu';
import shaurmaImg from './../../../assets/menu/Шаурма.png';

export default function Menu() {
  const menu: menuItem[] = [
    {
      id: 1,
      image: shaurmaImg,
      title: 'Шаурма деревенская',
      price: 399,
      description: 'Курица, картофель, маринованные огурцы, соус, лаваш'
    },
    {
      id: 2,
      image: shaurmaImg,
      title: 'Шаурма деревенская',
      price: 399,
      description: 'Курица, картофель, маринованные огурцы, соус, лаваш'
    },
    {
      id: 3,
      image: shaurmaImg,
      title: 'Шаурма деревенская',
      price: 399,
      description: 'Курица, картофель, маринованные огурцы, соус, лаваш'
    },
    {
      id: 4,
      image: shaurmaImg,
      title: 'Шаурма деревенская',
      price: 399,
      description: 'Курица, картофель, маринованные огурцы, соус, лаваш'
    },
    {
      id: 5,
      image: shaurmaImg,
      title: 'Шаурма деревенская',
      price: 399,
      description: 'Курица, картофель, маринованные огурцы, соус, лаваш'
    },
    {
      id: 6,
      image: shaurmaImg,
      title: 'Шаурма деревенская',
      price: 399,
      description: 'Курица, картофель, маринованные огурцы, соус, лаваш'
    }
  ];
  return (
    <div className="container mx-auto grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {menu.map(menuItem => (
        <MenuItem
          key={menuItem.id}
          {...menuItem}
        />
      ))}
    </div>
  );
}
