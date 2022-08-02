import React from "react";
const Like = (props) => {
  let classes = "hvr-bounce-in fa fa-heart";
  let liked = {
    cursor: "pointer",
    color: "deeppink",
  };
  let notliked = {
    cursor: "pointer",
  };
  if (!props.liked) classes += "-o";
  return (
    <i
      style={true === props.liked ? liked : notliked}
      onClick={props.onClick}
      className={classes}
      area-hidden="true"
    ></i>
  );
};
export default Like;
