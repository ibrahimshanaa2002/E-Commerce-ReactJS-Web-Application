import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleIconClick = () => {
    setIsHidden(true);
  };

  return (
    <div className="relative">
      <div
        className={`navbar-ad bg-black text-white p-3 flex justify-between items-center transform transition-transform duration-300 ease-in-out ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <h1 className="text-center flex-grow">
          Sign up and get 20% off your first order. Sign Up Now
        </h1>
        <FontAwesomeIcon
          icon={faTimes}
          size="sm"
          style={{ color: "#ffffff" }}
          onClick={handleIconClick}
        />
      </div>
      <div
        className={`navbar bg-black text-white p-3 transform transition-transform duration-300 ease-in-out ${
          isHidden ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ marginTop: isHidden ? "-56px" : "0" }}
      >
        Main Navbar
      </div>
    </div>
  );
};

export default Navbar;
