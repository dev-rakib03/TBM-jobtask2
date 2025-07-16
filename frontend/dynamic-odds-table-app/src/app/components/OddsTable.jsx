"use client";

export default function OddsTable({ match }) {
  const { localteam, awayteam, odds } = match;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">
        {localteam?.name} vs {awayteam?.name}
      </h2>

      {odds?.type?.length > 0 ? (
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Bookmaker</th>
              {odds.type.map((type, idx) => (
                <th key={idx} className="border border-gray-300 px-4 py-2">
                  {type.value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {odds?.type?.map((type, idx) => (
              <tr key={idx}>
                <td className="border border-gray-300 px-4 py-2">
                  {type.bookmaker?.map((book, bIdx) => (
                    <div key={bIdx} className="font-semibold text-gray-800">
                      {book.name}
                    </div>
                  ))}
                </td>
                {type.bookmaker?.map((book, bIdx) => (
                  <td key={bIdx} className="border border-gray-300 px-4 py-2">
                    {book.odd?.map((o, oIdx) => (
                      <div key={oIdx}>
                        {o.name}: <span className="font-mono text-green-700">{o.value}</span>
                      </div>
                    ))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No odds available for this match.</p>
      )}
    </div>
  );
}