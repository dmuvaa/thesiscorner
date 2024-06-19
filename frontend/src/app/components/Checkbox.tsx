/** @format */

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
  const ItemCard: React.FC<ItemCardProps> = ({ categoryData }) => {
    return (
      <div className="group cursor-pointer">
        <input
          type="checkbox"
          name="services"
          id={`service-${categoryData.title}`}
          className="opacity-0 absolute"
        />
        <label
          htmlFor={`service-${categoryData.title}`}
          className="border-1 rounded grid grid-cols-12 gap-2 w-full p-4 hover:bg-teal-600 "
        >
          <div className="col-span-2 flex items-center justify-center p-8 ">
            <svg
              className="hidden w-6 h-6 text-green-500 group-checked:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
