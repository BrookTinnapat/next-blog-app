"use client";

import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  PlusCircleIcon,
  PhotoIcon,
  VideoCameraIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/outline";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col p-4 bg-white h-[750px] md:h-[650px] shadow-md rounded-lg max-w-4xl mx-auto mt-10 relative">
      {/* Title Input */}
      <input
        type="text"
        placeholder="Enter title here..."
        className="w-full p-3 mb-4 text-xl font-bold border-b-2 border-gray-300 focus:outline-none"
      />

      <div className="flex flex-col md:flex-row gap-6">
        {/* Media Upload Button */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="w-[36px] h-[36px] rounded-md bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300 transition duration-200"
          >
            {/* <Image src="/image.png" alt="Upload Media" width={16} height={16} /> */}
            <PlusCircleIcon className="w-8 h-8 text-black" />
          </button>
          {/* Media Options */}
          {open && (
            <div className="flex gap-[10px] absolute z-50 bg-white p-2 rounded-md shadow-lg mt-2">
              <button className="w-[36px] h-[36px] rounded-md bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300 transition duration-200">
                {/* <Image
                  src="/image.png"
                  alt="Upload Image"
                  width={16}
                  height={16}
                />  */}
                <PhotoIcon className="w-8 h-8 text-black" />
              </button>
              <button className="w-[36px] h-[36px] rounded-md bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300 transition duration-200">
                {/* <Image
                  src="/image.png"
                  alt="Upload Video"
                  width={16}
                  height={16}
                /> */}
                <VideoCameraIcon className="w-8 h-8 text-black" />
              </button>
              <button className="w-[36px] h-[36px] rounded-md bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300 transition duration-200">
                {/* <Image
                  src="/image.png"
                  alt="Upload Audio"
                  width={16}
                  height={16}
                /> */}
                <MicrophoneIcon className="w-6 h-6 text-black" />
              </button>
            </div>
          )}
        </div>

        {/* Rich Text Editor */}
        <div className="flex-1">
          <ReactQuill
            className="w-full h-[500px] rounded-lg p-2 text-black"
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="Write your content here..."
          />
        </div>
      </div>

      {/* Publish Button */}
    </div>
  );
};

export default WritePage;
