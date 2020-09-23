import React, { useState, useEffect } from "react";
import axios from "axios";

import CharacterCard from "./CharacterCard";

export default function SearchForm() {
  // STRETCH TODO: Add stateful logic for query/form data
  const [name, setName] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = event => {
    setName(event.target.value);
    console.log(name);
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then(response => {
        console.log(response.data.results);
        setResults(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <section className="search-form">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleInputChange}
            placeholder="name"
            value={name}
            name="name"
          />
          <button type="submit">Search</button>
        </form>
      </section>
      {results && (
        <section className="character-list grid-view">
          {results.map(character => {
            return (
              <CharacterCard
                key={character.id}
                image={character.image}
                name={character.name}
                status={character.status}
                species={character.species}
                location={character.location.name}
                origin={character.origin.name}
                episode={character.episode}
              />
            );
          })}
        </section>
      )}
    </>
  );
}
