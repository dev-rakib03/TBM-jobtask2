"use client";

function SectionHeader({ title }) {
  return (
    <div className="flex items-center bg-[#232a3b] px-4 py-2 text-white font-semibold text-base border-b border-[#2e3650]">
      <span className="mr-2">{"▾"}</span>
      {title}
    </div>
  );
}

function renderOddsTable(type) {
  const bookmakers = Array.isArray(type.bookmaker)
    ? type.bookmaker
    : type.bookmaker
    ? [type.bookmaker]
    : [];
  const headers = Array.from(
    new Set(
      bookmakers.flatMap((book) =>
        book.odd ? book.odd.map((o) => o.name) : []
      )
    )
  );

  return (
    <div className="mb-8 rounded-lg overflow-hidden shadow border border-[#232a3b] bg-[#181e2a]">
      <SectionHeader title={type.value} />
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-[#232a3b] text-gray-300">
              <th className="px-4 py-2 text-left font-normal border-b border-[#2e3650]">
                Bookmaker
              </th>
              {headers.map((h) => (
                <th
                  key={h}
                  className="px-4 py-2 text-center font-normal border-b border-[#2e3650]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bookmakers.map((book, idx) => (
              <tr key={idx} className="border-t border-[#232a3b]">
                <td className="px-4 py-2 font-medium text-white">
                  {book.name}
                </td>
                {headers.map((h) => {
                  const odd = book.odd?.find((o) => o.name === h);
                  return (
                    <td key={h} className="px-4 py-2 text-center">
                      {odd ? (
                        <span className="font-mono text-[#f7b940] font-semibold">
                          {odd.value}
                        </span>
                      ) : (
                        <span className="text-gray-500">-</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function OddsTable({ match }) {
  const { localteam, awayteam, odds, date, time } = match;

  if (!odds?.type?.length) {
    return (
      <div className="text-gray-500">
        No odds data available for this match.
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 bg-[#181e2a] rounded-lg p-4 shadow border border-[#232a3b]">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold text-white mb-1">
            {localteam?.name} <span className="text-[#f7b940]">vs</span>{" "}
            {awayteam?.name}
          </h2>
          <div className="text-gray-400 text-sm">
            Match ID: <span className="font-mono">{match.id}</span>
          </div>
        </div>
        <div className="flex flex-col items-center mt-2 md:mt-0">
          <span className="text-[#f7b940] text-lg font-bold">{time}</span>
          <span className="text-gray-400 text-sm">{date}</span>
        </div>
      </div>
      {odds.type.map((type, idx) => (
        <div key={idx}>{renderOddsTable(type)}</div>
      ))}
    </div>
  );
}
