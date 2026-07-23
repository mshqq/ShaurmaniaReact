import Logo from '../../assets/logo.svg';
import './Footer.css';

export default function Footer() {
  const addresses: string[] = [
    'ул. Ленина 83',
    'Бабушкина 30',
    'Иркутская 16',
    'Амурская 98',
    '5-й мкр 29/2',
    'Столярова 83',
    'Бабушкина 98',
    'Курнатовского 25а/3',
    'Виля Липатова 26',
    'ТЦ Столица (Генерала Белика 1)',
    'Ленина 149',
    'мкр. Девичья Сопка 1а',
    'пр. Советов 7б'
  ];

  return (
    <footer className="bg-[#111111] flex flex-col gap-6">
      <div className="container mx-auto border-b-2 flex flex-row items-center justify-around py-3 border-b-gray-600 lg:px-0 lg:justify-between">
        <img
          src={Logo}
          alt="Shaurmania"
          className="h-6 sm:h-12"
        />
        <p className="text-white/70 text-sm lg:text-lg">&copy; 2026 Шаурмания, г. Чита</p>
      </div>
      <div className="container mx-auto gap-4 pb-8">
        <h3 className="text-white font-bold text-sm lg:text-lg text-center">Наши точки</h3>
        <div className="text-white/70 text-sm grid grid-cols-1 sm:grid-cols-2">
          {addresses.map((address, index) => (
            <span
              key={index}
              className="footer__bottom-address text-center py-3 border-b-2 border-white/40"
            >
              {address}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
