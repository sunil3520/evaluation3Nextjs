import React from "react";

const TechStack = () => {
  const style = { display: "flex", gap: "10px" };
  return (
    <div>
      <div style={style}>
        <h4>HTML</h4>
        <h4>CSS</h4>
        <h4>JAVASCRIPT</h4>
      </div>
      <div style={style}>
        <h4>NEXTJS</h4>
        <h4>REACTJS</h4>
        <h4>CHAKRA</h4>
        <h4>STORYBOOK</h4>
      </div>
    </div>
  );
};

export default TechStack;
