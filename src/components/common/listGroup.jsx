import React from "react";

const ListGroup = (props) => {
  const { genres, onItemSelect, textProperty, valueProperty } = props;
  const styleSheet = {
    cursor: "pointer",
  };
  return (
    <div>
      <ul className="list-group">
        {genres.map((m) => (
          <li
            key={m[valueProperty]}
            style={styleSheet}
            onClick={() => onItemSelect(m)}
            className="list-group-item"
          >
            {m[textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
