import React from "react";
import { NavLink } from "react-router-dom";

const FilterLink = ({ filter, children }) => (
  <NavLink
    exact
    to={filter === "SHOW_ALL" ? "/" : `/${filter}`}
    activeStyle={{
      textDecoration: "none",
      color: "black",
      backgroundColor: "white"
    }}
  >
    {children}
  </NavLink>
);

export default FilterLink;
