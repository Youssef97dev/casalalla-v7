import React from "react";

const FormMessage = () => {
  return (
    <form className="w-full flex flex-col justify-center items-center gap-4 text-[15.08px] leading-[21.12px] text-casa_7 my-20 px-5 lg:px-80">
      <div className="w-full flex justify-center items-center gap-3">
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="w-full rounded-md py-1"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-1">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="w-full rounded-md py-1"
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          className="w-full rounded-md py-1"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          className="w-full rounded-md py-1"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          className="w-full rounded-md py-1"
          rows={4}
        />
      </div>
      <button className="py-4 px-6 border border-casa_7 mr-auto">SUBMIT</button>
    </form>
  );
};

export default FormMessage;
