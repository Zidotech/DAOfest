import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Card = () => {
  return (
    <div className="section py-16 flex gap-x-5 gap-y-7 flex-wrap justify-around">
      <div className="card flex flex-col justify-between gap-y-5 sm:w-[380px] w-full ">
        <h4 className="sm:text-[32px] text-[25px] font-Poppins font-bold text-black">
          Become A Sponsor
        </h4>
        <p className="text-black font-Poppins font-medium">
          Sponsor DAOfest 2024 to gain unparalleled exposure and align your
          brand with decentralized innovation. Connect with a global audience of
          DAOists, Web3 enthusiasts, NGOs, and corporate bodies, showcasing your
          commitment to cutting-edge technologies. By supporting the go-to DAO
          event of the year, you'll amplify your brand's reach, connect with
          thought leaders, and contribute to the celebration of the potential of
          Decentralized Autonomous Organizations. Join us in empowering
          communities and individuals for sustainable development, becoming a
          catalyst for change in the decentralized revolution. Shape the future
          of innovation by sponsoring DAOfest.
        </p>
        <Link
          target="_blank"
          to={"https://app.deform.cc/form/6ab6ea4c-1866-4ff1-b311-b3dc70697af3"}
        >
          <button className="py-[14px] sm:px-[78px] px-12 bg-Primary text-[16px] font-Poppins rounded-2xl text-White">
            Apply As Sponsor
          </button>
        </Link>
      </div>

      <div className="card flex flex-col justify-between gap-y-5 sm:w-[380px] w-full">
        <h4 className="sm:text-[32px] text-[25px] font-Poppins font-bold text-black">
          Become A Speaker
        </h4>
        <p className="text-black font-Poppins  pb-5 font-medium">
          Elevate your influence and shape the future of decentralized
          coordination by becoming a speaker at DAOFest 2024. As a speaker,
          share your expertise with a global audience of DAOists, Web3
          enthusiasts, NGOs, and corporate bodies. Position yourself as a
          thought leader, contribute to the discourse on decentralized
          autonomous organizations, and celebrate the potential of DAOs. Join
          the go-to event of the year, inspire increased participation, and
          empower attendees with your knowledge to advance sustainable
          development through decentralized mechanisms. Apply now to be a
          distinguished speaker and leave a lasting impact on the decentralized
          community.
        </p>
        <Link
          target="_blank"
          to={"https://app.deform.cc/form/0a13adb9-e2e9-47f9-8230-e258224d857b"}
        >
          <button className="py-[14px] sm:px-[78px] px-12 bg-Primary text-[16px] font-Poppins rounded-2xl text-White">
            Apply As Speaker
          </button>
        </Link>
      </div>

      <div className="card flex flex-col  justify-between gap-y-5 sm:w-[380px] w-full ">
        <h4 className="sm:text-[32px] text-[25px] font-Poppins font-bold text-black">
          Pitch Your DAO
        </h4>
        <p className="text-black font-Poppins pb-5 font-medium">
          Are you leading a groundbreaking DAO initiative or nurturing a
          transformative DAO idea to address real-world challenges? Seize this
          unparalleled opportunity to spotlight your project or idea, gaining
          valuable mentorship and resources for sustained success. Whether you
          assemble a dynamic team or present independently, showcasing your DAO
          at DAOfest 2024 offers more than recognition—it's a golden chance to
          establish your project as a trailblazer in decentralized technologies,
          leaving an enduring imprint on the evolving landscape with enticing
          prizes and invaluable mentorship support.
        </p>
        <Link
          target="_blank"
          to={"https://app.deform.cc/form/dcbc5709-5f6d-4dce-a366-b194c0861154"}
        >
          <button className="py-[14px] sm:px-[78px] px-12 bg-Primary text-[16px] font-Poppins rounded-2xl text-White">
            Apply To Pitch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
