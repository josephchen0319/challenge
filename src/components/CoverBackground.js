import React, { useEffect, useState } from "react";
import GitHubApi from "../external_apis/GithubApi";
import moon from "../images/moon.png";

const CoverBackground = ({ offset }) => {
  useEffect(() => {
    GitHubApi.getUserPublicRepos();
  });

  return (
    <section className="parallax-section d-flex justify-content-center align-items-center position-relative">
      <img
        className="parallax-image position-absolute"
        src="https://images.unsplash.com/photo-1506606401543-2e73709cebb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80"
        alt="night city"
        style={{
          transform: `translateY(${offset * 0.5}px)`,
        }}
      />
      <img
        className="parallax-image position-absolute"
        src={moon}
        alt="moon"
        style={{
          transform: `translate(${offset * 0.5}px, ${offset * 0.5}px)`,
        }}
      />
      <div className="text-center text-white">
        <h1 className="cover-image-title">GitHub Repos</h1>
      </div>
    </section>
  );
};

export default CoverBackground;
