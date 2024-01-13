import { Link } from "react-router-dom";
import { SponsorCard } from "../constants";

const Sponsors = () => {
  return (
    <section id="speaker" className="py-12">
      <div className="flex justify-end bg-white">
        <div className=" sm:w-[60%] w-full flex justify-between sm:items-center items-end sm:px-0 px-3 sm:pr-5 ">
          <h3 className="font-Poppins sm:text-[32px] text-[23px] font-bold ">
            {" "}
            Our sponsors
          </h3>
          <Link
            target="_blank"
            to={
              "https://app.deform.cc/form/6ab6ea4c-1866-4ff1-b311-b3dc70697af3"
            }
            className="font-bold text-[16px] font-Poppins text-with-colored-underline "
          >
            Apply as Sponsor
          </Link>
        </div>
      </div>

      <div className="section pt-16">
        <div className="flex gap-28 flex-wrap justify-center">
          {SponsorCard.map((card) => (
            <div
              key={card.id}
              className="w-fit flex flex-col justify-between  h-[250px] "
            >
              <Link to={card.link} target="_blank">
                <img src={card.img} alt="" />
              </Link>
              <div className=" text-center">
                <h4 className="text-[28px] font-bold font-Poppins">
                  {card.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
