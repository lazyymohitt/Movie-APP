import React from "react";
import "./Buttons.css"; // Importing CSS file

const Buttons = ({ text, bgc, textcolor = "white" }) => {
  return (
    <div
      style={{
        backgroundColor: bgc,
        color: textcolor,
      }}
      className="button cursor-pointer px-8 py-2 rounded-full text-lg font-medium w-fit"
    >
      {text}
    </div>
  );
};

export default Buttons;
