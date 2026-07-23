import type { TypeFeature } from './Feature';

export default function Feature({ title, subtitle, icon }: TypeFeature) {
  return (
    <div className="bg-[#D9D9D9] flex flex-col items-center gap-2 pt-8 px-10 pb-6 rounded-2xl w-full max-w-80 sm:px-10">
      <img
        className="w-5"
        src={icon}
        alt=""
      />
      <p className="font-bold text-sm text-center md:w-64">{title}</p>
      <p className="text-sm text-center md:text-md md:w-64">{subtitle}</p>
    </div>
  );
}
