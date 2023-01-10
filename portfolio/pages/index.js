import React from "react";
import Experience from "../components/home/Experience";
import GitIntro from "../components/home/GitIntro";
import TechStack from "../components/home/techStack";
const Home = () => {
  return (
    <div>
      <div
        style={{
          border: "1px solid red",
          width: "30%",
          backgroundColor: "teal",
        }}
      >
        <div>
          <GitIntro />
        </div>
        <br></br>
        <div
          style={{
            border: "1px solid red",
            fontSize: "15px",
            backgroundColor: "red",
            color: "yellow",
          }}
        >
          <TechStack />
        </div>
        <br></br>
        <div
          style={{
            border: "1px solid red",
            fontSize: "15px",
            backgroundColor: "red",
            color: "white",
          }}
        >
          <Experience />
        </div>
      </div>
     <div>
      
     </div>
    </div>
  );
};

export default Home;
