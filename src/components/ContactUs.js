import React from "react";

const ContactUs = () => {
  return (
    <div className="px-[7.2rem] bg-[#edf4ff] py-20 flex flex-col lg:flex-row">
      <div className="lg:flex-[0.3] flex flex-col space-y-20">
        <h1 className="font-bold text-[35px]">
          Still have queries? Contact Us
        </h1>
        <p className="text-[17px]">
          Please fill in the form and an expert from the admissions office will
          call you in the next 4 working hours.
        </p>
      </div>
      <div className="lg:flex-[0.7] lg:pl-[10rem]">
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-10">
            <div className="flex-[0.5]">
              <p>Name</p>
              <input
                className="outline-none px-2 py-2 w-full border-[1px] border-gray-300 "
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex-[0.5]">
              <p>Email</p>
              <input
                className="outline-none px-2 py-2 w-full  border-[1px] border-gray-300 "
                type="email"
                placeholder="Enter your Email"
              />
            </div>
          </div>
          <div className="w-full">
            <p>Current Organization</p>
            <input
              type="text"
              className="outline-none px-2 py-2  w-full border-[1px] border-gray-300 "
              placeholder="Enter your current organization name"
            />
          </div>

          <div className="">
            <p>Write to us!</p>
            <textarea
              className="outline-none px-2 py-2 w-full border-[1px] border-gray-300 "
              placeholder="Enter your query! Someone from our team will reach out to you shortly."
              cols="30"
              rows="10"
            />
          </div>
          <button className="bg-[#196ae5] w-[15rem] rounded-md hover:shadow-lg self-center text-white h-[3rem]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
