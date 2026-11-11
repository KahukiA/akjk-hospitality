type BrandCrestProps = {
  className?: string;
};

export default function BrandCrest({ className = "h-28 w-28" }: BrandCrestProps) {
  const leaves = Array.from({ length: 8 }, (_, index) => {
    const y = 156 - index * 14;
    const x = 39 + index * 3.7;
    const angle = -42 + index * 4.5;
    const rightX = 240 - x;

    return (
      <g key={index} fill="none" stroke="#D4A72C" strokeWidth="1.35">
        <ellipse cx={x} cy={y} rx="3.4" ry="8" transform={`rotate(${angle} ${x} ${y})`} />
        <ellipse cx={rightX} cy={y} rx="3.4" ry="8" transform={`rotate(${-angle} ${rightX} ${y})`} />
      </g>
    );
  });

  return (
    <svg
      aria-label="AK&JK Hospitality gold crest"
      className={className}
      viewBox="0 0 240 210"
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="120" cy="103" r="67" stroke="#D4A72C" strokeWidth="1.4" />
      <circle cx="120" cy="103" r="61" stroke="#D4A72C" strokeWidth="0.8" strokeOpacity="0.6" />
      <path d="M31 163C17 125 25 75 66 39M209 163C223 125 215 75 174 39" stroke="#D4A72C" strokeWidth="1.35" />
      {leaves}
      <path d="M102 33L100 20L109 27L120 14L131 27L140 20L138 33M105 36H135M108 39H132" stroke="#D4A72C" strokeWidth="1.7" strokeLinejoin="round" />
      <circle cx="100" cy="19" r="1.8" fill="#D4A72C" />
      <circle cx="120" cy="13" r="1.8" fill="#D4A72C" />
      <circle cx="140" cy="19" r="1.8" fill="#D4A72C" />
      <text
        x="120"
        y="101"
        fill="#E8C36A"
        textAnchor="middle"
        fontFamily="Times New Roman, Times, serif"
        fontSize="26"
        letterSpacing="-1.2"
      >
        A&amp;K
      </text>
      <path d="M79 112H161" stroke="#D4A72C" strokeWidth="0.8" strokeOpacity="0.65" />
      <text x="120" y="126" fill="#F8F5EE" textAnchor="middle" fontFamily="Times New Roman, Times, serif" fontSize="7" letterSpacing="2.5">
        HOSPITALITY
      </text>
      <path d="M94 142V162M98 142V162M90 142V151C90 156 102 156 102 151V142" stroke="#D4A72C" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M120 142C112 142 111 154 120 158C129 154 128 142 120 142ZM120 158V164M116 164H124" stroke="#D4A72C" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M146 143C142 143 142 153 146 156C150 153 150 143 146 143ZM146 156V164" stroke="#D4A72C" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M63 169C81 180 100 184 120 184C140 184 159 180 177 169" stroke="#D4A72C" strokeWidth="1.3" />
    </svg>
  );
}
