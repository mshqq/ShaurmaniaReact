interface ButtonProps {
  text: string;
  link?: string;
}

export function Button({ text, link }: ButtonProps) {
  return (
    <a
      className="bg-[#F9D236] text-black rounded-md font-bold text-lg py-2 px-3 hover:bg-amber-400 transition-colors delay-75 ease-in cursor-pointer"
      href={link ?? '#'}
    >
      {text}
    </a>
  );
}
