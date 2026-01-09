"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductType {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export default function Product() {
  const products: ProductType[] = [
    {
      id: 1,
      image: "/assets/coffee1.png",
      title: "Black Coffee",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      image: "/assets/coffee3.png",
      title: "Hot Coffee",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      image: "/assets/coffee1.png",
      title: "Cold Coffee",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-16 space-y-4">
        <Header />
        <Card products={products} />
      </div>
    </>
  );
}

const Header = () => {
  return (
    <>
      <div className="text-center max-w-lg mx-auto space-y-2">
        <h1 className="text-3xl font-bold text-gray-700">
          Frest and <span className="text-orange-400">Tasty Coffee</span>
        </h1>
        <p className="text-sm opacity-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          officiis autem sed numquam inventore velit earum vel quia consectetur
          ex mollitia? Natus saepe sunt dicta dolores consequatur enim, illum
          corporis.
        </p>
      </div>
    </>
  );
};
interface CardProps {
  products: ProductType[];
}
const Card = ({ products }: CardProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 0.8 }}
        transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="space-y-4 flex flex-col items-center justify-center"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="image-shadow2 max-w-[200px] mx-auto hover:scale-110 transition-all duration-300 cursor-pointer"
            />

            <h2 className="text-2xl font-bold text-orange-500">
              {product.title}
            </h2>
            <p className="">{product.subtitle}</p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};
