"use client";
import { useState } from "react";
import CustomButton from "../components/Button";
import Cards from "../components/Cards";

function ArrivalsPage() {
  const [clickedCategory, setClickedCategory] = useState(1);
  const categories = [
    {
      name: "Mens Fashion",
      link: "/mens",
    },
    {
      name: "Womens Fashion",
      link: "/womens",
    },
    {
      name: "Womens Accessories",
      link: "/womensaccessories",
    },
    {
      name: "Mens Accessories",
      link: "/mensaccessories",
    },
    {
      name: "Discount Deals",
      link: "/discountdeals",
    },
  ];
  const salesItems = [
    {
      image: "home-col-1.png",
      title: "Shiny Dress",
      subTitle: "Al karam",
      ratings: 5,
      price: 200,
      customerReviews: "4.1k",
      info: "Almost sold out",
    },
    {
      image: "home-col-1.png",
      title: "Shiny Dress",
      subTitle: "Al karam",
      ratings: 5,
      price: 200,
      customerReviews: "4.1k",
      info: "almost sold out",
    },
    {
      image: "home-col-1.png",
      title: "Shiny Dress",
      subTitle: "Al karam",
      ratings: 5,
      price: 200,
      customerReviews: "4.1k",
      info: "almost sold out",
    },
    {
      image: "home-col-1.png",
      title: "Shiny Dress",
      subTitle: "Al karam",
      ratings: 5,
      price: 200,
      customerReviews: "4.1k",
      info: "Almost sold out",
    },
    {
      image: "home-col-1.png",
      title: "Shiny Dress",
      subTitle: "Al karam",
      ratings: 5,
      price: 200,
      customerReviews: "4.1k",
      info: "almost sold out",
    },
    {
      image: "home-col-1.png",
      title: "Shiny Dress",
      subTitle: "Al karam",
      ratings: 5,
      price: 200,
      customerReviews: "4.1k",
      info: "almost sold out",
    },
    {
      image: "home-col-1.png",
      title: "Shiny Dress",
      subTitle: "Al karam",
      ratings: 5,
      price: 200,
      customerReviews: "4.1k",
      info: "Almost sold out",
    },
    {
      image: "home-col-1.png",
      title: "Shiny Dress",
      subTitle: "Al karam",
      ratings: 5,
      price: 200,
      customerReviews: "4.1k",
      info: "almost sold out",
    },
    {
      image: "home-col-1.png",
      title: "Shiny Dress",
      subTitle: "Al karam",
      ratings: 5,
      price: 200,
      customerReviews: "4.1k",
      info: "almost sold out",
    },
  ];
  return (
    <div className="w-full max-w-7xl m-auto px-2">
      <p className="w-full flex justify-center ">New Arrivals</p>
      <p className="w-full flex justify-center text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        <br></br>
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex items-center justify-between mt-8 mb-8 px-12">
        {categories.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => setClickedCategory(index)}
              className={`${
                clickedCategory == index
                  ? "bg-black text-white px-12 py-4 rounded-lg"
                  : "bg-white text-black px-12 py-4 rounded-lg"
              } cursor-pointer`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="grid gap-6 p-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {salesItems.map((item, index) => {
          return <Cards items={item} key={index} />;
        })}
      </div>
      <div className="w-full flex justify-center mt-6 mb-6">
        <CustomButton name="View More" handleFunction={() => console.log()} />
      </div>
    </div>
  );
}

export default ArrivalsPage;
