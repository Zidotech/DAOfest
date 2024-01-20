import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { image } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [active, setActive] = useState(null);

  // scroll effect
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-20   ${
        active ? " bg-Nav" : "bg-Nav"
      }`}
    >
      <div className="section flex justify-between items-center sm:py-5 py-4">
        <div className="">
          <img src={image.logo} alt="" className="" />
        </div>

        <div
          className={`sm:flex hidden ${active ? "text-black" : "text-black"}`}
        >
          <ul className="flex gap-x-8">
            <li className="text-[16px] font-medium font-Poppins">
              <a href="#home">Home</a>
            </li>
            <li className="text-[16px] font-medium font-Poppins">
              <a href="#about">About DAOfest</a>
            </li>
            <li className="text-[16px] font-medium font-Poppins">
              <a href="#speaker">Speakers</a>
            </li>
            <li className="text-[16px] font-medium font-Poppins">
              <a href="#organizer">Organizing Team</a>
            </li>
            <li className="text-[16px] font-medium font-Poppins">
              <a href="#schedule">Schedule</a>
            </li>
          </ul>
        </div>

        <Link target="_blank" to={"mailto:info@daofest.xyz"}>
          <button className="sm:flex hidden py-[14px] px-[42px] bg-Primary text-[16px] font-Poppins rounded-2xl text-White">
            Get In Touch
          </button>
        </Link>

        <div className="sm:hidden flex">
          <GiHamburgerMenu
            fontSize={32}
            onClick={() => setToggleMenu(true)}
            className={`${active ? "text-white" : "text-black"}`}
          />
          {toggleMenu && (
            <div
              className={`${
                toggleMenu ? "block" : "hidden"
              } bg-Nav z-50 absolute top-0 left-0 right-0 w-full h-[45vh] p-3`}
            >
              <div className="flex justify-between items-center">
                <div className="">
                  <img src={image.logo} alt="" className="" />
                </div>
                <VscChromeClose
                  fontSize={27}
                  className="overlay__close"
                  onClick={() => setToggleMenu(false)}
                />
              </div>
              <ul className="flex flex-col gap-y-3 mt-6">
                <li>
                  <a
                    href="#home"
                    onClick={() => setToggleMenu(false)}
                    className="text-[18px] font-Poppins"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={() => setToggleMenu(false)}
                    className="text-[18px] font-Poppins"
                  >
                    About DAOfest
                  </a>
                </li>
                <li>
                  <a
                    href="#speaker"
                    onClick={() => setToggleMenu(false)}
                    className="text-[18px] font-Poppins"
                  >
                    Speakers
                  </a>
                </li>
                <li>
                  <a
                    href="#organizer"
                    onClick={() => setToggleMenu(false)}
                    className="text-[18px] font-Poppins"
                  >
                    Organizing Team
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => setToggleMenu(false)}
                    className="text-[18px] font-Poppins"
                  >
                    Schedule
                  </a>
                </li>
              </ul>

              <Link target="_blank" to={"mailto:info@daofest.xyz"}>
                <button className=" mt-6 py-[14px] px-[42px] bg-Primary text-[16px] font-Poppins rounded-2xl text-White">
                  Get In Touch
                </button>{" "}
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
