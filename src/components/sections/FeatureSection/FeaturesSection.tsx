import MeatIcon from './../../../assets/features/🥩.png';
import SauceIcon from './../../../assets/features/🌶️.png';
import CookIcon from './../../../assets/features/♨️.png';
import type { TypeFeature } from './Feature.ts';
import Feature from './Feature.tsx';

export default function FeaturesSection() {
  const features: TypeFeature[] = [
    { title: 'Почему выбирают нас', subtitle: 'Маринуем сами каждый день', icon: MeatIcon },
    { title: 'Фирменные соусы', subtitle: 'Собственные рецепты', icon: SauceIcon },
    { title: 'Готовим при вас', subtitle: 'Открытая кухня, всё на виду', icon: CookIcon }
  ];
  return (
    <div className="flex flex-col justify-center items-center pt-8 pb-12 gap-6 px-4">
      <h1 className="font-black text-lg text-center">Почему выбирают нас</h1>
      <div className="flex flex-col justify-center items-center gap-5 md:grid md:grid-cols-3 md:items-stretch">
        {features.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            subtitle={feature.subtitle}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
}
