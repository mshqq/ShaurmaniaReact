import { useState } from 'react';

export default function FormSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(name, email);
    setName('');
    setEmail('');
  };
  return (
    <div className="bg-[#1D1D1D] text-white py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-around gap-10">
        <div className="flex flex-col justify-center text-center md:items-start md:text-left">
          <h3 className="text-xl font-black">О компании</h3>
          <div className="mt-3 font-medium space-y-1">
            <p>Работаем с 2022 года</p>
            <p>13 точек в Чите</p>
            <p>Цены от 239 ₽</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:w-96">
          <h3 className="text-xl font-black mb-4">Получайте акции первыми</h3>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm flex flex-col gap-3 justify-center items-stretch"
          >
            <input
              placeholder="Ваше имя"
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full text-sm p-4 outline-none border-2 bg-[#0C0A0A] border-[#515151] placeholder-[#706E6E] rounded-2xl"
            />
            <input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full text-sm p-4 outline-none border-2 bg-[#0C0A0A] border-[#515151] placeholder-[#706E6E] rounded-2xl"
            />
            <button
              className="w-full text-sm p-4 border-none bg-[#E73F22] rounded-2xl font-black cursor-pointer transition-colors hover:bg-[#c9351d] delay-75"
              type="submit"
            >
              Подписаться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
