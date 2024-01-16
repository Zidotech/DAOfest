import { Link } from "react-router-dom";
import { image } from "../constants";

const Footer = () => {
  return (
    <footer className="py-8">
      <div className="section flex  justify-between sm:flex-row flex-col gap-y-5">
        <div className="">
          <img src={image.logo} alt="" className="w-[100px]" />
        </div>

        <div className="flex justify-between sm:w-[40%]">
          <div>
            <p className="mb-3 text-sm font-bold">Quick Link</p>

            <ul className="flex flex-col gap-y-3">
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

          <div>
            <p className="mb-3 text-sm font-bold">Socials</p>

            <div className="flex gap-7 pt-4">
              {/* <img src={image.discord} alt="" className="w-[34px]" />

              <img src={image.telegram} alt="" className="w-[34px]" /> */}

              <Link to={"https://x.com/DAOfest?s=20"} target="_blank">
                <img src={image.twitter} alt="" className="w-[34px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="border-t pt-5 px-4">
          <p className="">Copyright © 2023 DQ. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
