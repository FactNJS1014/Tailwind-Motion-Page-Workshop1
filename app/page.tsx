import Hero from "../components/Hero/Hero";
import Product from "../components/Product/Product";
import Location from "../components/Location/Location";
export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        {/* <Navbar /> */}
        <Hero />
        <Product />
        <Location />
      </div>
    </>
  );
}
