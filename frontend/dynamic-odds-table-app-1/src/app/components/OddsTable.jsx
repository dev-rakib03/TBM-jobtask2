"use client";

export default function OddsTable({ match }) {
  const { localteam, awayteam, odds } = match;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">
        {localteam?.name} vs {awayteam?.name}
      </h2>

      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Bookmaker</th>
            {odds?.type?.map((type, idx) => (
              <th key={idx} className="border border-gray-300 px-4 py-2">
                {type.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {odds?.type?.map((type, idx) => (
            type.bookmaker?.map((book, bIdx) => (
              <tr key={bIdx} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 font-semibold">
                  {book.name}
                </td>
                {type.bookmaker.map((bookmaker) => (
                  <td key={bookmaker.name} className="border border-gray-300 px-4 py-2">
                    {bookmaker.odd?.map((o) => (
                      <div key={o.name}>
                        {o.name}: <span className="font-mono text-green-700">{o.value}</span>
                      </div>
                    ))}
                  </td>
                ))}
              </tr>
            ))
          ))}
        </tbody>
      </table>
    </div>
  );
}