import React from "react";

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={props.onClick}
      className={classes}
      area-hidden="true"
    ></i>
  );
};
export default Like;
