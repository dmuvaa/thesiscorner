import React from "react";
import { discipline } from "./constants";
import { useAdditionalServicesContext } from "./contexts/AdditionalServicesContext";

const Checkout: React.FC<any> = (props) => {
  const {
    selectedAcademicLevel,
    selectedPaperFormat,
    selectedDeadline,
    topic,
    paper,
    selectedDiscipline,
    paperInstructions,
    file,
    pageCount,
    charts,
    selectedGroupItem,
  } = props;

  const { selectedServices } = useAdditionalServicesContext();
  const additionalServicesTotal = selectedServices
    .map((service) => {
      const intPrice = String(service.price).substring(1);
      console.log("type", typeof intPrice);
      console.log("service", intPrice);
      return Number(intPrice);
    })
    .reduce((total, i) => total + i, 0);

  const total = pageCount * 15.0 + charts * 5.0 + additionalServicesTotal;

  // const total = pageCount * 15.0 + charts * 5.0;
  console.log(selectedGroupItem)

  return (
    <div className="p-4 bg-teal-200 rounded shadow-teal-200 shadow-lg divide-y divide-gray-400 divide-solid">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">{topic}</h2>
        <h3 className="text-sm font-thin">{selectedAcademicLevel}</h3>
        <h3 className="text-sm font-thin whitespace-nowrap">{paper}</h3>
        <h3 className="text-sm font-thin">{selectedDiscipline}</h3>
      </div>

      <div className="text-pretty font-sans">
        <div className="flex justify-between items-center">
          <p className="text-gray-600 text-sm font-thin">
            {pageCount} pages × $ 15.00
          </p>
          <p className="text-gray-800 font-bold">
            $ {(pageCount * 15.0).toFixed(2)}
          </p>
        </div>
        {/* <div className="flex justify-between items-center">
          <p className="text-gray-600 text-sm font-thin">
            Category of the writer
          </p>
          <p className="text-gray-800 font-bold">$ 0.00</p>
        </div> */}
        
          <div className="flex justify-between items-center">
            <p className="text-gray-600 text-sm font-thin">
              {selectedGroupItem}
            </p>
            <p className="text-gray-800 font-bold">{selectedGroupItem}</p>
          </div>

        
        {charts > 0 && (
          <div className="flex justify-between items-center">
          <p className="text-gray-600 text-sm font-thin">
            {charts} charts × $ 6.00{" "}
          </p>
          <p className="text-gray-800 font-bold">
            $ {(charts * 6.00).toFixed(2)}
          </p>
        </div>
        )}
        
        {/* Added section to iterate through Additional services */}
        {selectedServices.length > 0 && (
          <div>
            <h5>Additional Services</h5>
            {selectedServices.map((service) => (
              <div
                key={service.title}
                className="flex justify-between items-center"
              >
                <p className="text-gray-600 text-sm font-thin">
                  {service.title}
                </p>
                <p className="text-gray-800 font-bold">{service.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600 font-bold">Total</p>
        <p className="text-gray-800 font-bold">$ {total.toFixed(2)}</p>
      </div>
      <button className="w-full bg-blue-500 text-white rounded py-2">
        Proceed to checkout
      </button>
    </div>
  );
};

export default Checkout;
