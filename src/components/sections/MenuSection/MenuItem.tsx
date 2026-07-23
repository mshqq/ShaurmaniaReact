import type { menuItem } from './Menu';

export default function MenuItem({ image, title, description, price }: menuItem) {
  return (
    <div className="overflow-clip bg-[#2C2C2C] flex flex-col rounded-xl text-white p-4">
      <img
        className="rounded-lg mb-3 aspect-square object-cover"
        src={image}
        alt={title}
      />
      <div className="flex flex-col gap-1">
        <p className="font-bold">{title}</p>
        <p className="font-normal text-sm text-gray-300">{description}</p>
        <div className="flex flex-row justify-between items-center mt-2">
          <p className="font-black text-yellow-300">{price} ₽</p>
          <button className="bg-amber-300 text-black rounded-xl font-bold px-3 py-2 hover:bg-amber-400 transition-colors delay-75">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}
