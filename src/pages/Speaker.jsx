import { Link } from "react-router-dom";
import { SpeakerCard } from "../constants";

const Speaker = () => {
  return (
    <section id="speaker" className="py-12">
      <div className="  text-center ">
        <h3 className="font-Poppins sm:text-[32px] text-[23px] font-bold ">
          Event Speakers
        </h3>
      </div>

      <div className="section pt-16">
        <div className="flex sm:gap-16 gap-5 flex-wrap justify-center">
          {SpeakerCard.map((card) => (
            <div key={card.id} className="sm:w-[200px] w-[140px] ">
              <img
                src={card.img}
                alt=""
                className="sm:w-[251px] w-full rounded-full border-[4px] border-BrowN"
              />
              <div className="pt-3 text-center">
                <h4 className="text-[16px] font-bold font-Poppins">
                  {card.name}
                </h4>
                <p className="mt-1 text-[14px] font-Poppins font-medium">
                  {card.designation}
                </p>
              </div>
              <div className="flex gap-x-5  w-full justify-center py-3">
                <Link target="_blank" to={card.linkedin}>
                  <img
                    src={card.linkedin_icon}
                    alt="Linkedin"
                    className={`w-[30px] ${
                      card.linkedin_icon === undefined ? "hidden" : ""
                    }`}
                  />
                </Link>
                <Link target="_blank" to={card.x}>
                  <img
                    src={card.x_icon}
                    alt="X"
                    className={`w-[30px] ${
                      card.x_icon === undefined ? "hidden" : ""
                    }`}
                  />{" "}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speaker;
