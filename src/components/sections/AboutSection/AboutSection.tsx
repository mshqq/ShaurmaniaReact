import Pic from './../../../assets/about/pic.png';

export default function AboutSection() {
  return (
    <div className="container flex flex-col p-4 justify-center items-center gap-4 md:flex-row md:gap-6">
      <img
        className="rounded-2xl w-full object-cover md:w-80 lg:w-96 lg:h-96 md:h-80"
        src={Pic}
        alt="Шаурмания"
      />
      <div className="flex flex-col justify-center items-center max-w-96">
        <h2 className="font-black text-xl">Мы готовим с душой</h2>
        <p className="font-medium text-sm mt-3">
          Шаурмания — сеть из 13 точек по всей Чите. Работаем с 2022 года. Каждый день готовим
          свежую шаурму из натуральных ингредиентов. Наши мастера прошли специальное обучение, чтобы
          каждый рулет получался идеальным.
        </p>
      </div>
    </div>
  );
}
