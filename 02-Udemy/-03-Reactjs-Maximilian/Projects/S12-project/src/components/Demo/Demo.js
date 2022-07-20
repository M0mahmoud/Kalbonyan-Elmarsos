import React from "react";
import MyP from "./MyP";

const DomeOutput = (props) => {
  console.log("DEMO RUNING")

  return <MyP>{props.show ? "This Is New!" : ""}</MyP>;
};

export default React.memo(DomeOutput);
