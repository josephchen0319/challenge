import React, { useEffect, useState } from "react";
import GitHubApi from "../external_apis/GithubApi";

const CoverBackground = () => {
  useEffect(() => {
    GitHubApi.getUserPublicRepos();
  });

  return (
    <section className="parallax-section d-flex justify-content-center">
      <img
        className="mx-auto parallax-image"
        src="https://images.unsplash.com/photo-1456154875099-97a3a56074d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
        alt="space"
      />
    </section>
  );
};

export default CoverBackground;
