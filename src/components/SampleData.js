import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    position: "absolute",
    top: "160px",
    left: "380px",
    right: "380px",
    bottom: "280px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "8px",
    outline: "none",
    padding: "20px",
  },
};

const SampleData = ({ id, photo, title, subtitle, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex space-x-3 border-2 rounded-lg w-full h-auto shadow-sm p-3"
      key={id}
    >
      <div className="bg-slate-200 rounded-lg h-[13rem] w-[13rem] p-[4rem]" onClick={() => setOpen(true)}>
        <img src={photo} alt="logo" />
      </div>
      <div className="flex flex-col space-y-3 justify-between" onClick={() => setOpen(true)}>
        <div className="flex flex-col space-y-6 justify-start">
          <div className="text-slate-500 text-[1.1rem] font-light flex justify-start">
            {title}
          </div>
          <div className="font-medium text-2xl flex justify-start">
            {subtitle}
          </div>
        </div>
        <div
          className="text-sky-600 text-1xl flex justify-start hover:cursor-pointer"
          onClick={() => setOpen(true)}
        >
          LEARN MORE
          
        </div>
      </div>

      <Modal isOpen={open} onRequestClose={() => setOpen(false)} style={customStyles}>
        <div className="flex w-[100%]">
          <div className="flex-col w-[97.5%]">
            <div className="flex space-x-6">
              <div className="bg-gray-100 p-3">
                <img src={photo} alt="icons" />
              </div>
              <div className="flex-col space-y-4 p-2">
                <p className="text-gray-500 font-normal text-[1.2rem]">
                  {title}
                </p>
                <p className="text-[1.6rem] font-medium">{subtitle}</p>
              </div>
            </div>
            <div className="text-[1.2rem] text-slate-600 font-normal pt-4">
              {description}
            </div>
          </div>
          <div className="w-[2.5%]" onClick={() => setOpen(false)}>
            <ImCross style={{ fontSize: "20px", color: "gray" }} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SampleData;
