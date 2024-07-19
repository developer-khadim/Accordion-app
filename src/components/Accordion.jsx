import React, { useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import { HiMinusCircle } from "react-icons/hi2";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };
  console.log(selected);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="wrapper bg-gray-100 p-4 rounded-lg shadow max-w-[600px] mx-auto">
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item mb-4">
                <div
                  onClick={() => handleSingleSelection(dataItem.id)}
                  className="title bg-gray-200 p-4 rounded-lg flex justify-between shadow cursor-pointer hover:bg-gray-300 transition duration-300 ease-in-out"
                >
                  <h3 className="text-lg font-semibold">{dataItem.question}</h3>
                  <span className="text-xl font-bold">
                    {selected === dataItem.id ? (
                      <HiMinusCircle />
                    ) : (
                      <HiPlusCircle />
                    )}
                  </span>
                </div>
                {selected === dataItem.id ? (
                  <div className="content p-4 bg-gray-200 rounded-lg mt-2">
                    <p className="text-sm text-gray-700">{dataItem.answer}</p>
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <div className="text-center text-gray-600">No data found !</div>
          )}
        </div>
        <div className="flex justify-center mt-4">
          <a href="https://github.com/developer-khadim" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaGithub className="text-2xl text-gray-700 hover:text-gray-900" />
          </a>
          <a href="https://www.linkedin.com/in/khadim-ali12/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-gray-700 hover:text-gray-900" />
          </a>
        </div>
        <p className="text-center text-gray-600 mt-2">Please like and follow on GitHub & Linkedin.</p>
      </div>
    </div>
  );
};

export default Accordion;
