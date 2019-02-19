import React from "react";

export const Like = ({ onClick, liked }) => (
  <i
    onClick={onClick}
    className={`fa fa-heart${liked ? "" : "-o"} mr-4`}
    aria-hidden="true"
    style={{ cursor: "pointer" }}
  />
);
