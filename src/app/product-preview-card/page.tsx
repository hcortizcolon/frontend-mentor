import Image from "next/image";
import { Montserrat, Fraunces } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen py-2 bg-product-preview-card-cream">
      <div className="flex flex-col sm:flex-row">
        <Image
          src="/product-preview-card/image-product-desktop.jpg"
          alt="Stand Out"
          className="w-80 rounded-l-xl hidden sm:block"
          width={500}
          height={500} />
        <Image
          src="/product-preview-card/image-product-mobile.jpg"
          alt="Stand Out"
          className="w-96 rounded-t-xl block sm:hidden"
          width={500}
          height={500} />
        <div className="bg-product-preview-card-white w-96 sm:w-80 rounded-b-xl sm:rounded-bl-none sm:rounded-r-xl p-8 flex flex-col justify-between">
          <p className={`${montserrat.className} text-product-preview-card-grey tracking-[0.25em]`}>PERFUME</p>
          <h2 className={`${fraunces.className} text-product-preview-card-black text-4xl my-4 font-bold`}>Gabrielle Essence Eau De Parfum</h2>
          <p className={`${montserrat.className} text-product-preview-card-grey`}>A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className="flex items-center gap-6">
            <h3 className={`${fraunces.className} text-product-preview-card-green-500 text-4xl my-4 font-bold`}>$149.99</h3>
            <p className={`${montserrat.className} text-product-preview-card-grey line-through`}>$169.99</p>
          </div>
          <button className={`${montserrat.className} font-bold rounded-lg w-full py-3 text-product-preview-card-white bg-product-preview-card-green-500 hover:bg-product-preview-card-green-700`}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
