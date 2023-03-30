import Header from "./components/Header";
import Product from "./components/Product";
import { data } from "./constants/dummy";

export default function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-6 sm:grid-cols-5  grid-cols-2 gap-2 my-10">
          {data.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
