import { Link } from "react-router-dom";
import { SpeakerCard } from "../constants";

const Speaker = () => {
  return (
    <section id="speaker" className="py-12">
      <div className="flex justify-end">
        <div className=" sm:w-[60%] w-full flex justify-between sm:items-center items-end sm:px-0 px-3 sm:pr-5 ">
          <h3 className="font-Poppins sm:text-[32px] text-[23px] font-bold ">
            {" "}
            Event Speakers
          </h3>
          <Link
            target="_blank"
            to={
              "https://app.deform.cc/form/0a13adb9-e2e9-47f9-8230-e258224d857b"
            }
            className="font-bold text-[16px] font-Poppins text-with-colored-underline "
          >
            Apply as Speaker
          </Link>
        </div>
      </div>

      <div className="section pt-16">
        <div className="flex gap-16 flex-wrap justify-center">
          {SpeakerCard.map((card) => (
            <div key={card.id} className="w-fit">
              <img src={card.img} alt="" className="w-[251px] rounded-full" />
              <div className="pt-3 text-center">
                <h4 className="text-[16px] font-bold font-Poppins">
                  {card.name}
                </h4>
                <p className="mt-1 text-[14px] font-Poppins font-medium">
                  {card.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speaker;
