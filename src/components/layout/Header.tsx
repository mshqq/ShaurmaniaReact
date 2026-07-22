import { Button } from '../ui/Button';
import logo from './../../assets/logo.svg';

export default function Header() {
  return (
    <>
      <div className="bg-[#E73F22]">
        <div className="container mx-auto flex flex-row items-center justify-between py-3">
          <img
            src={logo}
            alt=""
          />
          <Button text={'Корзина'} />
        </div>
      </div>
    </>
  );
}
