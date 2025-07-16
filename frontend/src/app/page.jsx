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
    <main className="p-6 max-w-screen-lg mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-blue-900">
        Match Odds Viewer
      </h1>
      <SearchBar matches={matches} onSelect={handleSelect} />
      {selectedMatch ? (
        <OddsTable match={selectedMatch} />
      ) : (
        <div className="text-gray-500 mt-8 text-center">No match selected.</div>
      )}
    </main>
  );
}
