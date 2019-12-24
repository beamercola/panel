import React, { useState, useEffect } from "react";
import PhotoArray from "../PhotoArray";
const Octokit = require("@octokit/rest");

const AssignedIssues = ({ owner, repo }) => {
  const [users, setUsers] = useState([]);
  const octokit = new Octokit();

  useEffect(() => {
    octokit.issues
      .listAssignees({ owner: owner, repo: repo })
      .then(({ data }) => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="text-xs break-words">
      <label className="label-xs">Outstanding Issues</label>
      <PhotoArray
        items={users.map(user => ({
          image: user.avatar_url,
          name: user.login
        }))}
      />
    </div>
  );
};

export default AssignedIssues;
