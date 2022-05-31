import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/outline";
import Select from "react-select";

const Poll = ({ setShowPoll }) => {
  const [showButton, setShowButton] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [pollTime, setPollTime] = useState({
    days: "",
    hours: "",
    minutes: "",
  });
  const [inputs, setInputs] = useState([
    {
      id: 1,
      placeHolder: "Choice 1",
      value: "",
      visible: true,
    },
    {
      id: 2,
      placeHolder: "Choice 2",
      value: "",
      visible: true,
    },
    {
      id: 3,
      placeHolder: "Choice 3 (optional)",
      value: "",
      visible: false,
    },
    {
      id: 4,
      placeHolder: "Choice 4 (optional)",
      value: "",
      visible: false,
    },
  ]);

  const DaysOptions = [];
  for (let i = 0; i <= 7; i++) {
    DaysOptions.push({ value: i, label: i.toString() });
  }

  const handleAddInput = () => {
    if (!inputs[2].visible) {
      setInputs([
        ...inputs.slice(0, 2),
        {
          id: 3,
          placeHolder: "Choice 3 (optional)",
          value: "",
          visible: true,
        },
        ...inputs.slice(2, 3),
      ]);
    } else if (!inputs[3].visible) {
      setInputs([
        ...inputs.slice(0, 3),
        {
          id: 4,
          placeHolder: "Choice 4 (optional)",
          value: "",
          visible: true,
        },
      ]);
      setShowButton(!showButton);
    }
  };

  return (
    <div className="flex flex-col border border-gray-500 rounded-2xl  ">
      <div className="flex w-full items-end  border-b border-gray-500 p-3">
        <div className="flex flex-col w-full">
          {inputs
            .filter((input) => input.visible)
            .map((i) => {
              return (
                <input
                  key={i.id}
                  placeholder={i.placeHolder}
                  onChange={(e) => (i.value = e.target.value)}
                  className="bg-transparent outline-none border border-gray-500 px-2 py-4 w-full mb-2 rounded-lg placeholder:text-xl focus:border-[#31a4f1] focus:shadow-[#31a4f1]"
                  maxLength={25}
                />
              );
            })}
        </div>
        <PlusIcon
          onClick={handleAddInput}
          className={`text-[#31a4f1] ${
            showButton ? "inline" : "hidden"
          } w-8 h-8 p-1 ml-2 mb-5 iconHoverAnimationColor icon`}
        />
      </div>
      <div className="p-4 border-b border-gray-500">
        <p className="text-md text-gray-300 mb-3">Poll Length</p>
        <div className="flex gap-3 items-center justify-between">
          <Select
            options={DaysOptions}
            placeholder="Days"
            className="w-full"
            classNamePrefix="pollselect"
            onChange={(e) => {
              setPollTime({ ...pollTime, days: e.value });
              if (e.value === 7) setDisabled(!disabled);
              else setDisabled(false);
            }}
          />
          <Select
            options={DaysOptions}
            placeholder="Hours"
            className={`w-full ${disabled ? "opacity-20" : ""}`}
            classNamePrefix="pollselect"
            isDisabled={disabled}
            onChange={(e) => {
              setPollTime({ ...pollTime, hours: e.value });
            }}
          />
          <Select
            options={DaysOptions}
            placeholder="Minutes"
            className={`w-full ${disabled ? "opacity-20" : ""}`}
            classNamePrefix="pollselect"
            isDisabled={disabled}
            onChange={(e) => setPollTime({ ...pollTime, minutes: e.value })}
          />
        </div>
      </div>
      <div className="flex items-center justify-center p-3 iconHoverAnimationError rounded-b-xl">
        <button
          onClick={setShowPoll}
          className="bg-transparent text-[#f5333f] w-full"
        >
          Remove poll
        </button>
      </div>
    </div>
  );
};

export default Poll;
