import React from "react";

const PublicReposTable = ({ reposData }) => {
  if (reposData && reposData.length > 0) {
    const tableData = reposData.map((repo) => (
      <tr key={repo.id} id={repo.id}>
        <td>{repo.id}</td>
        <td>{repo.name}</td>
        <td>{repo.description}</td>
        <td>
          <a href={repo.url}>{repo.url}</a>
        </td>
      </tr>
    ));

    return (
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">URL</th>
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
    );
  } else {
    return <h2 className="text-white text-center">Empty</h2>;
  }
};

export default PublicReposTable;
