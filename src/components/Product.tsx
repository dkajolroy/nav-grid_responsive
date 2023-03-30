import { data } from "../constants/dummy";
type Props = { item: typeof data[0] };
export default function Product({ item }: Props) {
  return (
    <div>
      <span className="h-[100px] dark:bg-slate-500 rounded-md block bg-slate-300 "></span>
      <h4 className="text-sm">{item.title}</h4>
      <span className="text-lg font-bold">${item.price}</span>
    </div>
  );
}
