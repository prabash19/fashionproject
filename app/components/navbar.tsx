"use client";
import CustomButton from "./Button";

function Navbar() {
  const navlinks = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Deals",
      link: "/deals",
    },
    {
      name: "New Arrivals",
      link: "/arrivals",
    },
    {
      name: "Packages",
      link: "/packages",
    },
    {
      name: "Sign in",
      link: "/signin",
    },
  ];
  return (
    <div className="flex justify-between items-center pt-14 pb-14">
      <div className="w-1/5 flex  items-center">FASCO</div>
      <div className="flex w-3/5 justify-between items-center">
        {navlinks.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
        <CustomButton
          name={"Sign Up"}
          handleFunction={() => console.log("login")}
        />
      </div>
    </div>
  );
}

export default Navbar;
