class GithubApi {
  static getUserPublicRepos(username) {
    const url = `https://api.github.com/users/${username}/repos`;
    const options = {
      headers: { Accept: "application/vnd.github.nebula-preview+json" },
    };
    return fetch(url, options)
      .then((res) => res.json())
      .catch((err) => err);
  }
}

export default GithubApi;
