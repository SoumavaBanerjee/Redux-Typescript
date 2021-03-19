import React, { useState } from "react";
import useAction from "../hooks/useAction";

const RepositoriesList: React.FC = () => {
  const [input, setInput] = useState("");
  const { searchRepositories } = useAction();
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
    </div>
  );
};

export default RepositoriesList;
