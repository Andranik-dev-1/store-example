import { Billboard } from "@/types";

interface BillboardProps {
  data: Billboard;
}

const Billboard = ({ data }: BillboardProps) => {
  console.log('dataa', data)
  return (
    <div className="p-3 sm:p-4 lg:p-7 rounded-xl overflow-hidden bg-white/50">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {data?.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
