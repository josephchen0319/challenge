import React, { useEffect, useState } from "react";
import CoverBackground from "./components/CoverBackground";
import PublicReposTable from "./components/PublicReposTable";
import Paragraph from "./components/Paragraph";

import GithubApi from "./external_apis/GithubApi";
import RandomText from "./external_apis/RandomText";

function App() {
  const [repos, setRepos] = useState([]);
  const [username] = useState("josephchen0319");
  const [text, setText] = useState([]);
  const [offset, setOffset] = useState(0);

  function loadRandomText(num) {
    RandomText.getRandomText(num).then((data) => {
      setText((original) => [...original, ...data]);
    });
  }

  useEffect(() => {
    GithubApi.getUserPublicRepos(username).then((data) => {
      setRepos(data);
    });
    loadRandomText(10);

    window.addEventListener("scroll", () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        loadRandomText(10);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setOffset(window.pageYOffset);
    });
  });
  return (
    <div className="container-fluid p-0 position-relative overflow-hidden">
      <CoverBackground offset={offset} />
      <div className="container-fluid table-responsive p-0 ">
        <PublicReposTable reposData={repos} />
      </div>
      <div>
        <h2 className="text-center">Infinite text cards</h2>
        <div className="background-text white-text position-absolute">
          {text.map((t) => t.repeat(5))}
        </div>
        <div className="container">
          <Paragraph textArray={text} />
        </div>
      </div>
    </div>
  );
}

export default App;
