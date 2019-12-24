import React, { useState, useEffect } from "react";
const Octokit = require("@octokit/rest");
import Message from "../Message";

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
    <Message
      name={commit && commit.author && commit.author.login}
      image={commit && commit.author && commit.author.avatar_url}
      body={commit && commit.commit && commit.commit.message}
      date={
        commit &&
        commit.commit &&
        commit.commit.author &&
        commit.commit.author.date
      }
    />
  );
};

export default LatestCommit;
