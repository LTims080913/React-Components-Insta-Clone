// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        {/* <i className="fab fa-instagram" /> */}
      <img className="insta" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6jAFMHNwo5C2UhTvxLHykvgmzey5GH-GNDNy4AU9enB5s9qdp"></img>
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
