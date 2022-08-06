import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const MovieForm = ({ history }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>{id}</h1>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => {
          navigate("/", { replace: true });
        }}
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
