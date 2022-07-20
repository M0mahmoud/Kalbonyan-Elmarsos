import React from "react";

const MyP = (props) => {
  console.log("MyP RUNING")

  return <p>{props.children}</p>;
};

export default MyP;
