import React, { useState, useEffect } from "react";
const Octokit = require("@octokit/rest");

const AssignedIssues = ({ owner, repo }) => {
  const [users, setUsers] = useState([]);
  const octokit = new Octokit();

  useEffect(() => {
    octokit.issues
      .listAssignees({
        owner: owner,
        repo: repo
      })
      .then(({ data }) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <div className="text-xs break-words">
      <label className="label-xs">Outstanding Issues</label>
      <div className="flex flex-wrap">
        {users.map(user => (
          <img
            className="w-6 h-6 inline-block rounded-full mr-2 mb-2"
            src={user.avatar_url}
            alt={user.login}
          />
        ))}
      </div>
    </div>
  );
};

export default AssignedIssues;
