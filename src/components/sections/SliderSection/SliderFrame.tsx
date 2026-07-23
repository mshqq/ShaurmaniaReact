import type { Slide } from './Slide';

export default function SliderFrame({ text, img, index }: Slide) {
  const bubblesList = [];
  for (let i = 0; i < 4; i++) {
    bubblesList.push(
      <div
        key={i}
        className={`rounded-full w-2.5 h-2.5 ${Number(index) === i ? 'bg-[#E73F22]' : 'bg-[#2C2C2C]'}`}
      ></div>
    );
  }
  return (
    <div className="flex flex-col gap-5 font-bold text-xl justify-center items-center min-h-50 px-4">
      <img
        src={img}
        alt={text}
        className="w-18 h-18 md:h-36 md:w-36"
      />
      <p className="text-white text-sm w-55 h-14 flex items-center justify-center text-center md:text-lg">
        {text}
      </p>
      <div className="flex flex-row gap-1.5">{bubblesList}</div>
    </div>
  );
}
