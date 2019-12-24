import React, { useState, useEffect } from "react";
const Octokit = require("@octokit/rest");

const LatestCommit = ({ owner, repo }) => {
  const [commit, setCommit] = useState({});
  const octokit = new Octokit();

  useEffect(() => {
    octokit.repos
      .listCommits({
        owner: owner,
        repo: repo
      })
      .then(({ data }) => {
        setCommit(data[0]);
      });
  }, []);

  return (
    <div className="text-xs break-words">
      {commit && commit.author && (
        <div className="flex items-center font-medium mb-1">
          <img
            className="w-4 h-4 inline-block rounded-full mr-2"
            src={commit.author.avatar_url}
            alt={commit.author.login}
          />
          {commit.author.login}
        </div>
      )}
      {commit && commit.commit && commit.commit.message}
    </div>
  );
};

export default LatestCommit;
