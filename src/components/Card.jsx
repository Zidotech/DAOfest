import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Card = () => {
  return (
    <div className="section py-16 flex gap-x-5 gap-y-7 flex-wrap justify-around">
      <div className="card flex flex-col gap-y-5 sm:w-[380px] w-full ">
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

      <div className="card flex flex-col gap-y-5 sm:w-[380px] w-full">
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

      <div className="card flex flex-col gap-y-5 sm:w-[380px] w-full ">
        <h4 className="sm:text-[32px] text-[25px] font-Poppins font-bold text-black">
          Pitch Your DAO
        </h4>
        <p className="text-black font-Poppins pb-5 font-medium">
          Increase your DAO's visibility and influence by pitching at DAOfest
          2024, a premier event that provides a global stage for Decentralized
          Autonomous Organizations. Seize the opportunity to showcase your DAO's
          innovations and societal impact, attracting attention from investors
          and collaborators. This is not just a pitch—it's a chance to position
          your DAO as a trailblazer in decentralized technologies and make a
          lasting impact on the evolving landscape. Don't miss this unique
          opportunity to captivate the decentralized community and shape the
          future of decentralized coordination. Submit your pitch for DAOfest
          2024 and propel your DAO to new heights.
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
