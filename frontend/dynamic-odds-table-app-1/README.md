# Dynamic Odds Table Application

This project is a dynamic odds table application built with Next.js. It allows users to view and search for football match odds in real-time, providing an interactive experience for sports enthusiasts.

## Project Structure

```
dynamic-odds-table-app
├── public
│   └── data.json          # Contains the list of football match odds in JSON format.
├── src
│   └── app
│       ├── components
│       │   ├── OddsTable.jsx  # Displays the odds for the selected match.
│       │   └── SearchBar.jsx   # Allows users to search for matches by ID or team name.
│       └── page.jsx           # Main entry point of the application.
├── package.json               # Configuration file for npm, listing dependencies.
└── README.md                  # Documentation for the project.
```

## Features

- **Dynamic Odds Display**: The application fetches match odds from a JSON file and displays them in a structured table format.
- **Real-time Search**: Users can search for matches by ID or team name, with suggestions appearing as they type.
- **Responsive Design**: The application is designed to be user-friendly and responsive.

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

4. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage Guidelines

- Use the search bar to find matches by entering the Match ID or team names.
- Click on a match to view detailed odds in the table below.
- The odds table will dynamically update based on the selected match.

## License

This project is licensed under the MIT License.