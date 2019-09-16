import React from "react";
import { Route } from "react-router-dom";

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";

import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import EpisodesList from "./components/EpisodesList";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route path="/character" component={CharacterList} />
      <Route path="/location" component={LocationsList} />
      <Route path="/episode" component={EpisodesList} />
    </main>
  );
}
