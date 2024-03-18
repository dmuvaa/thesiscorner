/** @format */

export default function AdditionalServices({ items }: { items: any }) {
  const ItemCard = ({ categoryData }: { categoryData: any }) => {
    return (
      <div className="border rounded grid grid-cols-12 gap-2">
        <div className="col-span-2 justify-center p-8 ">
          <input type="checkbox" name="" id="" />
        </div>
        <div className="col-span-10">
          <div className="flex flex-col">
            <h4 className="font-bold opacity-3">{categoryData.title}</h4>
            <p className="ml-auto">{categoryData.price}</p>
          </div>
          <div>
            <p className="my-2">{categoryData.description}</p>
          </div>
        </div>
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
