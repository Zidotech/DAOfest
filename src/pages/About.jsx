/* eslint-disable react/no-unescaped-entities */
import { image } from "../constants";

const About = () => {
  return (
    <section id="about">
      <div className="about py-16">
        <h3 className="text-[32px] font-bold text-center">About DAOfest</h3>

        <div className="sm:mt-24 section flex justify-between items-center sm:flex-row flex-col px-4 gap-y-7 sm:gap-y-0">
          <img src={image.about} alt="" />

          <p className="sm:w-[50%] w-full font-Poppins font-medium">
            DAOFest 2024 is a premier gathering of DAOists, Web3 enthusiasts,
            NGOs, communities, and corporate bodies from across the globe,
            converging in Africa to explore, intensify, and shape decentralized
            coordination. As the go-to DAO event of the year, DAOFest aims to
            celebrate the potential of Decentralized Autonomous Organizations
            (DAOs) and pave the way for increased participation in this
            revolutionary space. The goal is to empower communities and
            individuals, providing them with the tools and knowledge to harness
            DAO mechanisms for sustainable development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
