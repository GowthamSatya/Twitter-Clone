import React, { useState, useRef } from "react";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import {
  PhotographIcon,
  VideoCameraIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  CalendarIcon,
  LocationMarkerIcon,
  XIcon,
} from "@heroicons/react/outline";
import Profile from "../../assets/profile.png";
import Image from "next/image";
import Poll from "../atoms/Poll";
import GIFModal from "../atoms/GIFModal";

const CreatePost = () => {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState([]);
  const [showPoll, setShowPoll] = useState(false);
  const filePickerRef = useRef();

  const handleAddFile = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile((prevSelectedFile) => {
        if (prevSelectedFile === null) {
          return [readerEvent.target.result];
        } else {
          return [...prevSelectedFile, readerEvent.target.result];
        }
      });
    };
  };

  const handleDeleteMedia = (i) => {
    selectedFile.splice(i, 1);
    setSelectedFile([...selectedFile]);
  };

  const handleGIFModal = () => {
    setIsOpen(!isOpen);
  };

  const addEmoji = (e) => {
    console.log(e);
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  return (
    <>
      {isOpen && <GIFModal onModalClick={() => setIsOpen(!isOpen)} />}
      <div className="flex flex-col px-4 border-b border-gray-500">
        <div className="flex my-4 items-start">
          <div className="rounded-full">
            <Image
              src={Profile}
              width={55}
              height={55}
              alt="proflePic"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col w-full ml-4">
            <textarea
              type="textarea"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex placeholder:pt-4 active:placeholder:pt-0 focus:placeholder:pt-0 text-xl w-full font-400  bg-transparent border-0 outline-none active:border-0 focus:border-0 text-[#bfc0b8] mb-3"
              placeholder={showPoll ? `Ask a question?` : `What's happening?`}
            />
            <div
              className={`flex ${!selectedFile && "min-h-[350px]"} flex-wrap`}
            >
              {selectedFile &&
                selectedFile?.map((file, i) => {
                  return (
                    <>
                      <div
                        className={`relative ${
                          selectedFile.length === 1 ? "" : "basis-1/2"
                        }`}
                      >
                        <div className="text-white bg-gray-700 hoverAnimation h-6 rounded-full bg-opacity-10 absolute z-10 w-6 top-1 left-1">
                          <XIcon
                            className="text-white w-6"
                            onClick={() => handleDeleteMedia(i)}
                          />
                        </div>
                        <img
                          src={file}
                          key={i}
                          className="w-full h-full rounded-xl object-cover"
                          alt={`img-${i}`}
                        />
                      </div>
                    </>
                  );
                })}
            </div>

            {showPoll && <Poll setShowPoll={() => setShowPoll(false)} />}
          </div>
        </div>
        <div className="flex items-center mt-2 mb-4 justify-center ">
          <div className="flex ml-[69px] text-white space-x-4">
            <div
              className="icon"
              onClick={() => filePickerRef.current.click()}
              disabled={showPoll}
            >
              <PhotographIcon
                className={`text-[#31a4f1] w-[26px] stroke-1.5 ${
                  showPoll && "text-[#31a4f198]"
                }`}
              />
              <input
                type="file"
                hidden
                onChange={handleAddFile}
                ref={filePickerRef}
              />
            </div>
            <button onClick={handleGIFModal} disabled={selectedFile.length > 0}>
              <VideoCameraIcon
                className={`text-[#31a4f1] w-[26px] stroke-1.5 ${
                  (selectedFile.length > 0 || showPoll) && "text-[#31a4f198]"
                }`}
              />
            </button>
            <button
              disabled={selectedFile.length > 0}
              onClick={() => setShowPoll(!showPoll)}
            >
              <ChartBarIcon
                className={`text-[#31a4f1] w-[26px] stroke-1.5 ${
                  selectedFile.length > 0 && "text-[#31a4f198]"
                }`}
              />
            </button>

            <div className="icon" disabled>
              <EmojiHappyIcon
                className="text-[#31a4f1] w-[26px] stroke-1.5"
                onClick={() => setEmojiPickerOpen(!emojiPickerOpen)}
              />

              {emojiPickerOpen && (
                <Picker
                  onSelect={addEmoji}
                  style={{
                    position: "absolute",
                    marginTop: "465px",
                    marginLeft: -40,
                    maxWidth: "320px",
                    borderRadius: "20px",
                  }}
                  theme="dark"
                  className="m-0"
                />
              )}
            </div>
            <button disabled={showPoll}>
              <CalendarIcon
                className={`text-[#31a4f1] w-[26px] stroke-1.5 ${
                  showPoll && "text-[#31a4f198]"
                }`}
              />
            </button>

            <button disabled={selectedFile.length > 0 || true}>
              <LocationMarkerIcon
                className={`text-[#31a4f1] w-[26px] stroke-1.5 ${
                  (selectedFile.length > 0 || true || showPoll) &&
                  "text-[#31a4f198]"
                }`}
              />
            </button>
          </div>
          <button className="ml-auto bg-[#1b9bf0] text-white rounded-full w-24 h-[44px] text-[18px] font-semibold shadow-md hover:bg-[#1a8cd8]">
            Tweet
          </button>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
