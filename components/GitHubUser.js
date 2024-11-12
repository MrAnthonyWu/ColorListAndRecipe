import React, { useState, useEffect } from "react";

function GitHubUser({ login }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .then(() => setLoading(false))
      .catch(console.error);
  }, [login]);

  if (loading) return <h1>loading...</h1>;
  if (!data) return null;

  return (
    <div className="githubUser">
    <img
    src={data.avatar_url}
    alt={data.login}
    style={{ width: 200 }}
    />
    <div>
    <h1>{data.login}</h1>
    {data.name && <p>{data.name}</p>}
    {data.location && <p>{data.location}</p>}
    </div>
    </div>
    );
}

export default function App() {
  return <GitHubUser login="MrAnthonyWu" />;
}
