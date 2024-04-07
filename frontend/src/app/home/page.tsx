/** @format */

// import Calculator from "./calculator";
import PriceCalculator from "../components/Form";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-24 px-24 min-h-screen bg-gradient-to-r from-[#6c00c8] from-10% to-[#19d6e1] to-98%">
        <div className="mx-4 my-2">
          <Hero />
        </div>
        <div className="p-4">
          <PriceCalculator />
        </div>
      </div>
      
    </>
  );
}
