export default function GridSpan() {
  return (
    <div className="grid grid-cols-5 ">
      <div className="col-span-4 bg-red-200 h-[200px] flex items-center justify-center">
        Banner
      </div>
      <div className="col-span-1 bg-yellow-200 h-[200px] flex items-center justify-center">
        Banner mini
      </div>
    </div>
  );
}
