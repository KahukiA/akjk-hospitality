type EastAfricaMapProps = {
  className?: string;
};

export default function EastAfricaMap({ className = "" }: EastAfricaMapProps) {
  return (
    <div className={`rounded-2xl border border-[#D4A72C]/70 bg-[#08090B]/95 p-4 shadow-[0_12px_48px_rgba(0,0,0,0.55)] ${className}`}>
      <p className="text-center text-[10px] font-bold uppercase tracking-[0.28em] text-[#E8C36A]">
        Regional Presence
      </p>
      <svg viewBox="0 0 360 250" className="mx-auto mt-2 h-auto w-full max-w-[290px]" role="img" aria-label="Map highlighting Kenya, Tanzania, Uganda and Rwanda in East Africa" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#E8C36A" strokeWidth="2" strokeLinejoin="round">
          <path d="M91 48 132 39 159 55 158 92 143 112 112 107 91 82Z" fill="#C89211" fillOpacity=".7" />
          <path d="M164 48 219 39 264 63 276 99 252 132 219 137 197 119 160 100Z" fill="#D4A72C" fillOpacity=".82" />
          <path d="M113 113 144 116 163 103 198 122 218 142 251 138 268 162 248 204 214 223 181 214 158 226 132 211 111 180 99 148Z" fill="#C89211" fillOpacity=".68" />
          <path d="m93 117 20-4 10 15-7 17-18-2-9-13Z" fill="#E0B354" fillOpacity=".82" />
          <path d="m109 150 14-2 8 13-7 13-14-4-5-11Z" fill="#E0B354" fillOpacity=".82" />
          <path d="M159 55 160 100m-47 13 46-10m-34 58 38-9m-10-36 61 21m-42 77 23-54" fill="none" stroke="#F8F5EE" strokeWidth="1.1" strokeOpacity=".8" />
        </g>
        <g fill="#FFF9E9" fontFamily="Times New Roman, Times, serif" fontSize="11" fontWeight="bold" letterSpacing=".7">
          <text x="107" y="75">UGANDA</text>
          <text x="192" y="83">KENYA</text>
          <text x="168" y="183">TANZANIA</text>
          <text x="48" y="133">RWANDA</text>
          <text x="51" y="145" fontSize="8" letterSpacing=".2">(EAST AFRICA)</text>
        </g>
        <circle cx="220" cy="100" r="4" fill="#FFF9E9" />
        <circle cx="220" cy="100" r="8" fill="none" stroke="#FFF9E9" strokeWidth="1" />
        <text x="230" y="103" fill="#FFF9E9" fontFamily="Times New Roman, Times, serif" fontSize="8">NAIROBI</text>
      </svg>
      <p className="mt-1 text-center text-[9px] font-semibold uppercase tracking-[0.14em] text-[#F8F5EE]">
        Kenya · Tanzania · Uganda · Rwanda
      </p>
    </div>
  );
}
