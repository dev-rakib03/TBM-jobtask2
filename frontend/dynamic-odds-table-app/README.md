# Dynamic Odds Table Application

This project is a dynamic odds table application built with Next.js. It allows users to view and search for football match odds in real-time, providing a user-friendly interface for accessing match information.

## Project Structure

```
dynamic-odds-table-app
├── public
│   └── data.json          # Contains the data for football match odds in JSON format.
├── src
│   └── app
│       ├── components
│       │   ├── OddsTable.jsx  # Component for displaying odds for a selected match.
│       │   └── SearchBar.jsx   # Component for searching matches by ID or team name.
│       └── page.jsx           # Main entry point for the application.
├── package.json               # Configuration file for npm, listing dependencies and scripts.
└── README.md                  # Documentation for the project.
```

## Features

- **Dynamic Odds Table**: Displays odds for selected matches, dynamically generating table headers based on the odds structure.
- **Search Functionality**: Users can search for matches by Match ID or team name, with real-time suggestions.
- **Data Fetching**: The application fetches and parses match data from a local JSON file (`data.json`).

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd dynamic-odds-table-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm run dev
   ```

4. **Access the Application**: Open your browser and navigate to `http://localhost:3000`.

## Usage Guidelines

- Use the search bar to find matches by entering the Match ID or team names.
- Click on a match from the suggestions to view its odds in the table below.
- The odds table will update dynamically based on the selected match.

## License

This project is licensed under the MIT License.