import React, { useState } from "react";

const LatestCommitForm = ({ configuration, update }) => {
  const [owner, setOwner] = useState(configuration.owner);
  const [repo, setRepo] = useState(configuration.repo);

  const handleSubmit = () => {
    console.log("submitting");
    update({
      variables: {
        id,
        configuration: { ...configuration, owner: owner, repo: repo }
      }
    });
  };

  return (
    <div className="p-2">
      <label className="label-xs">Username</label>
      <input
        className="input mb-2"
        type="text"
        onChange={e => setOwner(e.target.value)}
        onBlur={() => handleSubmit()}
        value={owner}
      />

      <label className="label-xs">Repository</label>
      <input
        className="input"
        type="text"
        onChange={e => setRepo(e.target.value)}
        onBlur={() => handleSubmit()}
        value={repo}
      />
    </div>
  );
};

export default LatestCommitForm;
