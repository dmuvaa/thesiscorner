/** @format */

import Calculator from "./calculator";
import PriceCalculator from "./Form2";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch gap-24 px-24 min-h-screen">
        <div className="mx-4 self-stretch">
          <Hero />
        </div>
        <div className="p-4">
          <PriceCalculator />
        </div>
      </div>
      
    </>
  );
}
