import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // Add useState to track data from useEffect
  const [data, setData] = useState([]);

  useEffect(() => {
    //  Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        // console.log(response.data.results);
        setData(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section className="character-list grid-view">
      {data.map(character => {
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
  );
}
