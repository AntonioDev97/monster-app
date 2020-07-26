import React from "react";
import "./search.style.css";

export const Search = ({handleChange}) => (
    <div>
        <input className="search-input" type="search" placeholder="Search" onChange={handleChange}  />
    </div>
);