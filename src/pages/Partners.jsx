import { Link } from "react-router-dom";
import { PartnerCard } from "../constants";

const Partners = () => {
  return (
    <section id="speaker" className="py-12">
      <div className="text-center py-2 bg-white">
        <h3 className="font-Poppins sm:text-[32px] text-[23px] font-bold ">
          {" "}
          Media and Community Partners
        </h3>
      </div>

      <div className="section pt-16">
        <div className="flex sm:gap-x-10 gap-5 gap-y-8 sm:gap-y-0 flex-wrap justify-center">
          {PartnerCard.map((card) => (
            <div
              key={card.id}
              className="w-fit flex flex-col justify-between items-center  sm:h-[125px] "
            >
              <Link to={card.link} target="_blank">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-[150px] sm:w-[200px]"
                />
              </Link>
              {/* <div className=" text-center">
                <h4 className="sm:text-[22px] text-[20px] font-bold font-Poppins">
                  {card.name}
                </h4>
              </div> */}
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

export default Partners;
