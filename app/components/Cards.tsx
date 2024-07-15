interface CardsData {
  image: string;
  title: string;
  subTitle: string;
  ratings: number;
  price: number;
  customerReviews: string;
  info: string;
}

interface CardsProps {
  items: CardsData;
}

const Cards: React.FC<CardsProps> = ({ items }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg cursor-pointer">
      <img
        src={items.image}
        alt={items.title}
        className="w-full h-40 object-cover rounded-lg"
      />
      <div className="mt-2">
        <div className="flex items-center w-full justify-between">
          <h2 className="text-xl font-semibold">{items.title}</h2>
          <span className="text-yellow-500">⭐ {items.ratings}</span>
        </div>
        <h3 className="text-lg text-gray-600">{items.subTitle}</h3>
        <p className="mt-2 text-gray-700">
          &#40;{items.customerReviews}&#41; Customer Reviews
        </p>
        <div className="flex items-center mt-2 w-full justify-between">
          <span className="text-gray-600">${items.price}</span>
          <p className="text-red-500">{items.info}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
