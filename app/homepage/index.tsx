import Navbar from "../components/navbar";

function HomePage() {
  return (
    <div className="max-w-7xl m-auto px-2">
      <Navbar />
      <div className="flex flex-col md:flex-row md:gap-8 h-[80vh]">
        <div className="w-full bg-[#E0E0E0] rounded-lg flex justify-center items-center">
          <img src={"home1.png"} className="pt-44" />
        </div>
        <div className="w-full flex flex-col h-full">
          <div className="bg-[#E0E0E0] rounded-lg flex justify-center items-center">
            <img src={"home-col-1.png"} />
          </div>
          <div className="flex-grow ">
            <p>ULTIMATE</p>
            <p>sale</p>
            <p>NEW COLLECTION</p>
            <p>BUTTON</p>
          </div>
          <div className="bg-[#E0E0E0] rounded-lg mt-auto  md:items-end flex justify-center items-center">
            <img src={"home-col-1.png"} />
          </div>
        </div>
        <div className="w-full bg-[#E0E0E0] rounded-lg flex justify-center items-center">
          <img src={"home1.png"} className="pt-44" />
        </div>
      </div>
      <div className="py-12 flex justify-between items-center">
        <p>a</p>
        <p>v</p>
        <p>s</p>
        <p>sdf</p>
        <p>asd</p>
      </div>
    </div>
  );
}

export default HomePage;
