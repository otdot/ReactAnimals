import React from "react";

const Sidebar = () => {
  return (
    <div
      style={{
        height: "50rem",
        width: "15rem",
        backgroundColor: "blue",
        position: "absolute",
        top: 0,
        left: 0,
        margin: 0,
      }}
    >
      <h1>this is a side bar</h1>
      <span
        style={{
          display: "block",
          height: "5rem",
          width: "5rem",
          backgroundColor: "yellow",
          borderRadius: "50%",
          marginLeft: "5rem",
        }}
      ></span>
    </div>
  );
};

export default Sidebar;
