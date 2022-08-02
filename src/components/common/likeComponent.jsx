import React from "react";
const Like = (props) => {
  let classes = "fa fa-heart";
  let liked = {
    cursor: "pointer",
    color: "#C51104",
  };
  let notliked = {
    cursor: "pointer",
  };
  if (!props.liked) classes += "-o";
  return (
    <i
      style={true === props.liked ? liked : notliked}
      onClick={props.onClick}
      className={classes + " hvr-bounce-in"}
      area-hidden="true"
    ></i>
  );
};
export default Like;
