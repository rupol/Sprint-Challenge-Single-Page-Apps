import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

export default function EpisodesList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(response => {
        // console.log(response.data.results);
        setData(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <section className="location-list grid-view">
      {data.map(episode => {
        return (
          <EpisodeCard
            key={episode.id}
            name={episode.name}
            date={episode.air_date}
            episode={episode.episode}
            characters={episode.characters}
          />
        );
      })}
    </section>
  );
}
