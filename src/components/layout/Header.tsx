import { Button } from '../ui/Button';
import logo from './../../assets/logo.svg';

export default function Header() {
  return (
    <div className="bg-[#E73F22]">
      <div className="container mx-auto flex flex-row items-center justify-around lg:justify-between py-3 lg:px-0">
        <img
          className="h-8 sm:h-12"
          src={logo}
          alt="Shaurmania"
        />
        <Button text={'Корзина'} />
      </div>
    </div>
  );
}
