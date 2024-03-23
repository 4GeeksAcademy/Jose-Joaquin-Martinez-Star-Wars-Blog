import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
// import style
import "./../../styles/navbar.css";

// import icon
import { FaRegTrashAlt } from "react-icons/fa";

//import logo
import logoImg from "./../../img/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  return (
    <nav className=" navbar fixed-top">
      <div className="logo">
        <Link to="/">
          <img
            className="navbar-brand star-logo"
            src={logoImg}
            alt="star Wars logo"
          />
        </Link>
      </div>
      <div className="dropdown favorites">
        <button
          className="btn dropdown-fav-btn  dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
          onClick={handleDropdownClick}
        >
          {store.favItem.map((element) => {
            return (
              <li className="list-element" key={element.uid}>
                <span
                  onClick={() =>
                    navigate(`/single/${element.category}/${element.uid}`)
                  }
                >
                  {element.name}
                </span>
                <FaRegTrashAlt
                  className="ms-1"
                  onClick={() => actions.deleteFromFavorites(element)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
