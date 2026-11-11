import BrandCrest from "./BrandCrest";

type CrestWatermarkSlotProps = {
  className?: string;
  crestClassName?: string;
};

export default function CrestWatermarkSlot({
  className = "",
  crestClassName = "h-44 w-52",
}: CrestWatermarkSlotProps) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center ${className}`}
    >
      <BrandCrest className={`${crestClassName} opacity-[0.16] drop-shadow-[0_0_30px_rgba(200,146,17,0.08)]`} />
    </div>
  );
}
