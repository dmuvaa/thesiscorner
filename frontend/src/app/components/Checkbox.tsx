/** @format */
import { useAdditionalServicesContext } from "./contexts/AdditionalServicesContext";

interface CategoryData {
  title: string;
  price: number;
  description: string;
}

interface ItemCardProps {
  categoryData: CategoryData;
}

interface AdditionalServicesProps {
  items: { [title: string]: CategoryData };
}

export default function AdditionalServices({ items }: AdditionalServicesProps) {
  const { selectedServices, toggleService } = useAdditionalServicesContext();

  const ItemCard: React.FC<ItemCardProps> = ({ categoryData }) => {
    const isChecked = selectedServices.some((service) => service.title === categoryData.title);

    const handleClick = () => {
      toggleService({title: categoryData.title, price: categoryData.price});
    };

    return (
      <div className="group cursor-pointer">
        <input
          type="checkbox"
          name="services"
          checked={isChecked}
          onChange={handleClick}
          id={`service-${categoryData.title}`}
          className="sr-only"
        />
        <label
          htmlFor={`service-${categoryData.title}`}
          className="border-1 rounded grid grid-cols-12 gap-2 w-full p-4 hover:bg-teal-600 "
        >
          <div className="col-span-2 flex items-center justify-center p-8 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              className={`absolute ${!isChecked ? '' : 'hidden'}`}
              // {`transition-transform ${isChecked ? 'text-green-500 scale-150' : ''}`}
              // "absolute checkbox-unchecked"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1 .9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="hidden absolute w-6 h-6 text-green-500 group-checked:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="col-span-10">
            <div className="flex justify-between my-2">
              <h4 className="font-bold">{categoryData.title}</h4>
              <p className="ml-auto">{categoryData.price}</p>
            </div>
            <div>
              <p className="my-2">{categoryData.description}</p>
            </div>
          </div>
        </label>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 gap-2 rounded-sm shadow-sm">
      {Object.entries(items).map(([title, data]) => (
        <ItemCard key={title} categoryData={{ title, ...data }} />
      ))}
    </div>
  );
}
