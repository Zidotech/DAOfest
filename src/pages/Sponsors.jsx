import { Link } from "react-router-dom";
import { SponsorCard } from "../constants";

const Sponsors = () => {
  return (
    <section id="speaker" className="py-12">
      <div className="text-center py-2 bg-white">
        <h3 className="font-Poppins sm:text-[32px] text-[23px] font-bold ">
          {" "}
          Our sponsors
        </h3>
      </div>

      <div className="section pt-16">
        <div className="flex gap-10 flex-wrap justify-center">
          {SponsorCard.map((card) => (
            <div
              key={card.id}
              className="w-fit flex flex-col justify-between items-center  h-[155px] "
            >
              <Link to={card.link} target="_blank">
                <img src={card.img} alt="" className="w-[100px]" />
              </Link>
              <div className=" text-center">
                <h4 className="sm:text-[22px] text-[20px] font-bold font-Poppins">
                  {card.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h4 className="text-[23px] font-Lexend font-medium text-center mt-14 sm:px-0 px-3">
        An Initiative of Timbuktu DAO and Africa Web3 Institute
      </h4>
    </section>
  );
};

export default Sponsors;
