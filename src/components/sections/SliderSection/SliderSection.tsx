import NextIcon from './../../../assets/slider/next.svg';
import PrevIcon from './../../../assets/slider/prev.svg';
import SliderFrame from './SliderFrame';
import ElectricIcon from './../../../assets/slider/electric.png';
import GiftboxIcon from './../../../assets/slider/giftbox.png';
import PinIcon from './../../../assets/slider/pin.png';
import SaladIcon from './../../../assets/slider/salad.png';
import type { Slide } from './Slide';
import { useState } from 'react';

export default function SliderSection() {
  const [index, setIndex] = useState(0);
  const Slides: Slide[] = [
    { text: 'Готовим за 3 минуты', img: ElectricIcon, index: 0 },
    { text: 'Свежие ингредиенты каждый день', img: SaladIcon, index: 1 },
    { text: '13 точек по всей Чите', img: PinIcon, index: 2 },
    { text: 'Скидка 10% на первый заказ', img: GiftboxIcon, index: 3 }
  ];
  const decrement = () => {
    setIndex(prev => (prev <= 0 ? Slides.length - 1 : prev - 1));
  };
  const increment = () => {
    setIndex(prev => (prev >= Slides.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="flex items-center flex-row mx-auto bg-[#1D1D1D] justify-center gap-10 pt-10 pb-20">
      <button
        onClick={decrement}
        className="block p-0 border-0 bg-transparent leading-none opacity-100 hover:opacity-70 cursor-pointer"
      >
        <img
          className="block"
          src={PrevIcon}
          alt=""
          width="50"
        />
      </button>
      <SliderFrame
        text={Slides[index].text}
        img={Slides[index].img}
        index={Slides[index].index}
      />
      <button
        onClick={increment}
        className="block p-0 border-0 bg-transparent leading-none opacity-100 hover:opacity-70 cursor-pointer"
      >
        <img
          className="block"
          src={NextIcon}
          alt=""
          width="50"
        />
      </button>
    </div>
  );
}
