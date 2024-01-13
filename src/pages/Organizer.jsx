import { OrganizerCard } from "../constants";

const Organizer = () => {
  return (
    <section id="organizer" className="py-12 organizer">
      <div className="text-center">
        <h3 className="font-Poppins text-[32px] font-bold"> Organizing Team</h3>
      </div>

      <div className="section pt-16">
        <div className="flex gap-16 flex-wrap justify-center">
          {OrganizerCard.map((card) => (
            <div key={card.id} className="w-fit">
              <img src={card.img} alt="" />
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
