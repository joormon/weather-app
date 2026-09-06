# Weather App

A simple React weather application that retrieves weather data from an external API and displays it in a clear, user-friendly interface.

## Features

- Search for weather by location.
- Display current weather information and relevant details.
- Save the last selected location in the browser's `localStorage`.
- Restore the saved location when the app is opened again.


## Data and API Requests

This app is intended for one person on one browser. It uses `localStorage` to remember the user's selected location, rather than maintaining accounts or a backend database.

To avoid exhausting the weather API request limit:

- The saved location is reused on page reloads.
- Requests are made only when a new location is searched or weather data needs to be refreshed.
- Avoid repeatedly submitting the same location unnecessarily.
- Add a reasonable refresh interval or cache expiry if automatic updates are implemented.

`localStorage` is browser-specific and should not be used for sensitive information. Clearing browser storage removes the saved location.

## Getting Started

### Prerequisites

- Node.js and npm
- An API key from the selected weather API provider

### Installation

```bash
npm install
```

Create a `.env` file and add the API key using the variable name expected by the application. For Vite applications, environment variables exposed to client-side code normally use the `VITE_` prefix.

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Production Build

```bash
npm run build
npm run preview
```

## Privacy

The app stores only the selected location locally in the browser. No user account or personal profile is required.
