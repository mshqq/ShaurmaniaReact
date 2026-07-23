interface ButtonProps {
  text: string;
  link?: string;
}

export function Button({ text, link }: ButtonProps) {
  return (
    <a
      className="bg-[#F9D236] text-black rounded-md font-bold text-sm px-2.5 py-1.5 hover:bg-amber-400 transition-colors delay-75 ease-in cursor-pointer sm:text-lg sm:py-2 sm:px-3"
      href={link ?? '#'}
    >
      <span className="text-xl sm:hidden">🛒</span>
      <span className="sr-only sm:not-sr-only">{text}</span>
    </a>
  );
}
