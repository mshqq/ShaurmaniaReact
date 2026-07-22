export default function SliderFrame({ text, img, index }) {
  const bubblesList = [];
  for (let i = 0; i < 4; i++) {
    bubblesList.push(
      <div
        key={i}
        className={`rounded-full ${Number(index) === i ? 'bg-[#E73F22]' : 'bg-[#2C2C2C]'} w-2.5 h-2.5`}
      ></div>
    );
  }
  return (
    <div className="flex flex-col gap-5 font-bold text-xl justify-center items-center min-h-70">
      <img
        src={img}
        alt=""
        className="w-36 h-36"
      />
      <p className="text-white w-55 h-14 flex items-center justify-center text-center">{text}</p>
      <div className="flex flex-row gap-1.5">{bubblesList}</div>
    </div>
  );
}
