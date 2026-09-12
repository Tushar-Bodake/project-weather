# Weather App

A modern weather application built with React and Vite. It allows users to search for a city and view current weather details such as temperature, humidity, feels-like temperature, and min/max temperature.

## Features

- City search
- Real-time weather data from OpenWeatherMap
- Modern glassmorphism-inspired UI
- Responsive design
- Weather-based background image changes

## Tech Stack

- React
- Vite
- Material UI
- OpenWeatherMap API

## Project Structure

```bash
mini/
├── public/
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── Infobox.css
│   ├── Infobox.jsx
│   ├── Searchbox.css
│   ├── Searchbox.jsx
│   ├── Weatherapp.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js
└── ...
```

## Installation

1. Clone the repository
2. Open the project folder
3. Install dependencies:

```bash
npm install
```

## Run the App

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## Environment Setup

This app uses the OpenWeatherMap API. You need to add your own API key in `src/Searchbox.jsx`.

Example:

```js
const API_KEY = "YOUR_API_KEY_HERE";
```
## Notes

- The app is designed to work as a front-end project and fetches weather data from OpenWeatherMap.
- The API key should be kept private and not shared publicly.

