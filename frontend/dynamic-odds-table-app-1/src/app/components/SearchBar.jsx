"use client";
import { useState } from "react";

export default function SearchBar({ matches, onSelect }) {
  const [query, setQuery] = useState("");

  if (!matches || matches.length === 0) {
    return <div className="text-gray-500">Loading matches...</div>;
  }

  const filtered = matches.filter((m) => {
    const idMatch = m?.id?.toString().includes(query.toString());
    const homeMatch = m?.localteam?.name?.toLowerCase().includes(query.toLowerCase());
    const awayMatch = m?.awayteam?.name?.toLowerCase().includes(query.toLowerCase());
    return idMatch || homeMatch || awayMatch;
  });

  return (
    <div className="relative z-20 mb-4">
      <input
        className="border w-full px-4 py-2"
        placeholder="Search by Match ID or Team Name"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && filtered.length > 0 && (
        <ul className="absolute w-full bg-white border shadow z-50 max-h-60 overflow-y-auto">
          {filtered.map((m) => (
            <li
              key={m.id}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => {
                onSelect(m.id);
                setQuery("");
              }}
            >
              {m.id} - {m.localteam?.name} vs {m.awayteam?.name}
            </li>
          ))}
        </ul>
      )}
      {query && filtered.length === 0 && (
        <div className="absolute w-full bg-white p-2 border text-gray-500 z-50">
          No matches found
        </div>
      )}
    </div>
  );
}