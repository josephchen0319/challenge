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

  function loadRandomText(num) {
    RandomText.getRandomText(num).then((data) => {
      console.log([...text, ...data]);
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
        console.log(text);
        loadRandomText(10);
      }
    });
  }, []);

  return (
    <div className="container-fluid p-0">
      {/* <CoverBackground /> */}
      <div className="container-fluid table-responsive">
        <PublicReposTable reposData={repos} />
      </div>
      <div className="container-fluid">
        <Paragraph textArray={text} />
      </div>
    </div>
  );
}

export default App;
