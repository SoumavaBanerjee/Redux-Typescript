import React, { useState } from "react";
import useAction from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [input, setInput] = useState("");
  const { searchRepositories } = useAction();
  const { loading, error, data } = useTypedSelector(
    (state) => state.repositories
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="search..." onChange={onChange} />
        <button type="submit">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!(loading && error) &&
        data.map((repository, index) => {
          return <p key={index}>{repository}</p>;
        })}
    </div>
  );
};

export default RepositoriesList;
