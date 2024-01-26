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
            <div key={card.id} className="sm:w-fit w-[160px] ">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speaker;
