import React from "react";

const EditButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className="btn btn-primary btn-sm">
      ИЗМЕНИТЬ
    </button>
  );
};

export default EditButton;
