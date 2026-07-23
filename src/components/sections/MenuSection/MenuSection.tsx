import Menu from './Menu.tsx';

export default function MenuSection() {
  return (
    <div className="flex flex-col bg-[#1D1D1D] text-white justify-center items-center py-10 gap-4">
      <h2 className="font-black text-xl">Наше меню</h2>
      <div className="flex flex-row gap-2 text-sm flex-wrap px-4">
        <button className="font-bold p-4 bg-[#2C2C2C] border-[#515151] rounded-full">Все</button>
        <button className="font-bold p-4 bg-[#2C2C2C] border-[#515151] rounded-full">Шаурма</button>
        <button className="font-bold p-4 bg-[#2C2C2C] border-[#515151] rounded-full">
          Кесадилья
        </button>
      </div>
      <Menu />
    </div>
  );
}
