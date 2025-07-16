"use client";
import { useState } from "react";

export default function SearchBar({ matches, onSelect }) {
  const [query, setQuery] = useState("");

  if (!matches || matches.length === 0) {
    return <div className="text-gray-500">Loading matches...</div>;
  }

  const filtered = matches.filter((m) => {
    const idMatch = m?.id?.toString().includes(query.toString());
    const homeMatch = m?.localteam?.name
      ?.toLowerCase()
      .includes(query.toLowerCase());
    const awayMatch = m?.awayteam?.name
      ?.toLowerCase()
      .includes(query.toLowerCase());
    return idMatch || homeMatch || awayMatch;
  });

  return (
    <div className="relative z-20 mb-4">
      <input
        className="border w-full px-4 py-2 rounded focus:outline-[#f7b940] bg-[#181e2a] text-white placeholder-gray-400"
        placeholder="Search by Match ID or Team Name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && filtered.length > 0 && (
        <ul className="absolute w-full bg-[#232a3b] border border-[#2e3650] shadow z-50 max-h-60 overflow-y-auto rounded-b-lg">
          {filtered.map((m, idx) => (
            <li
              key={`${m.id}-${idx}`}
              className="px-4 py-2 hover:bg-[#2e3650] cursor-pointer text-white"
              onClick={() => {
                onSelect(m.id);
                setQuery("");
              }}
            >
              <span className="font-semibold text-[#f7b940]">{m.id}</span> -{" "}
              <span className="text-white">{m.localteam?.name}</span>{" "}
              <span className="text-gray-400">vs</span>{" "}
              <span className="text-white">{m.awayteam?.name}</span>
            </li>
          ))}
        </ul>
      )}
      {query && filtered.length === 0 && (
        <div className="absolute w-full bg-[#232a3b] p-2 border border-[#2e3650] text-gray-400 z-50 rounded-b-lg">
          No matches found
        </div>
      )}
    </div>
  );
}
