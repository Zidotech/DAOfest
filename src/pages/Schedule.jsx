import { useState } from "react";
import { SchTabs } from "../constants";

const Schedule = () => {
  const [activeTab, setActiveTab] = useState(SchTabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <section className="py-16" id="schedule">
      <h3 className="font-bold text-[32px] font-Poppins text-center">
        Conference Schedule
      </h3>

      <div className="flex flex-col items-center justify-center ">
        <div className="tab-buttons flex flex-wrap sm:gap-x-7 justify-center mt-7">
          {SchTabs.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? "active" : "inactive"}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.date}
            </button>
          ))}
        </div>

        <div className={`tab-content w-full  `}>
          {SchTabs.map((tab) => (
            <div
              key={tab.id}
              className={`${
                activeTab === tab.id ? "active" : "inactive"
              }  sm:w-[90%] w-[95%] mx-auto`}
            >
              {tab.content.map((cont, index) => (
                <div
                  key={cont.name}
                  className={` rounded-md sm:w-[50%] w-full mx-auto mt-5 flex ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`flex sm:gap-x-7 gap-x-2 items-center  justify-between py-4 sm:px-6 px-3 rounded-xl mt-5 ${
                      cont.id === 1 ? " bg-Light1  sm:w-[80%] " : ""
                    } ${cont.id === 2 ? " bg-Light2  sm:w-[80%]" : ""} ${
                      cont.id === 3 ? " bg-Light3  sm:w-[80%]" : ""
                    }${cont.id === 4 ? " bg-Light4  sm:w-[65%] w-[85%]" : ""}${
                      cont.id === 5 ? " bg-Light5  sm:w-[70%] w-[95%]" : ""
                    } ${cont.id === 6 ? " bg-Light6  sm:w-[75%]" : ""} ${
                      cont.id === 7 ? " bg-Light7  sm:w-[70%]" : ""
                    }${cont.id === 8 ? " bg-Light8  sm:w-[70%]" : ""}`}
                  >
                    {/* <h4>{cont.time}</h4>
                    <img src={cont.img} alt="" />
                    <div className=" w-[50%] sm:w-fit">
                      <h4 className="text-[16px] font-medium font-Poppins">
                        {cont.topic}
                      </h4>
                      <h4 className="text-[14px] font-medium font-Poppins">
                        {cont.name}
                      </h4>
                    </div> */}
                    <h4>Coming Soon...</h4>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
