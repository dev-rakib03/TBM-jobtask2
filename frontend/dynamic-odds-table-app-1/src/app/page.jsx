"use client";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import OddsTable from "./components/OddsTable";

export default function HomePage() {
  const [matches, setMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("/data.json");
        const json = await res.json();

        const loadedMatches = json.data.flatMap((entry) => {
          const matchData = entry?.matches?.match;
          if (!matchData) return [];
          return Array.isArray(matchData) ? matchData : [matchData];
        });

        setMatches(loadedMatches);
      } catch (e) {
        console.error("Failed to load matches:", e);
      }
    };

    loadData();
  }, []);

  const handleSelect = (id) => {
    const match = matches.find((m) => m.id === id);
    setSelectedMatch(match);
  };

  return (
    <main className="p-6 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Match Odds Viewer</h1>
      <SearchBar matches={matches} onSelect={handleSelect} />
      {selectedMatch ? <OddsTable match={selectedMatch} /> : <p>No match selected.</p>}
    </main>
  );
}