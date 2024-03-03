import { OrganizerCard } from "../constants";

const Organizer = () => {
  return (
    <section id="organizer" className="py-12 organizer">
      <div className="text-center">
        <h3 className="font-Poppins text-[32px] font-bold"> Organizing Team</h3>
      </div>

      <div className="section pt-16">
        <div className="flex sm:gap-y-16 sm:gap-x-10 gap-5 flex-wrap justify-center">
          {OrganizerCard.map((card) => (
            <div key={card.id} className="sm:w-fit w-[160px]">
              <img
                src={card.img}
                alt=""
                className="sm:w-[251px] w-full rounded-full border-[4px] border-Blue"
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

export default Organizer;
