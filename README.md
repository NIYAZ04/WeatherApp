# Weather Forecast Application
### This project is a weather forecast application developed as a task assigned by Propacity. It fetches and displays real-time weather data from a public API (OpenWeatherMap) and allows users to search for weather information for different cities.

### Table of Contents

Features
Technologies Used
Installation Instructions
Development Process
Usage
Contributing
Features

Display current weather for a default city.
Search functionality to look up weather information for different cities.
Five-day weather forecast display.
Temperature unit conversion between Celsius and Fahrenheit.
Responsive design for mobile and desktop users.
Technologies Used
React.js
OpenWeatherMap API
CSS (for styling)


### Installation Instructions
To get started with the project, follow these steps:

### Clone the repository:

bash
Copy code
git clone https://github.com/NIYAZ04/WeatherApp
Navigate to the project directory:

bash
Copy code
cd weather-forecast-app
Install dependencies: Ensure you have Node.js installed. Then run:

bash
Copy code
npm install
Obtain an API Key: Sign up at OpenWeatherMap and get your API key. Replace YOUR_API_KEY in the code with your actual API key.

Run the application: Start the development server with:

bash
Copy code
npm start
Open the application: Open your browser and go to http://localhost:3000 to view the app.

### Development Process
Initial Setup: Created a React application using Create React App.
API Integration: Integrated the OpenWeatherMap API to fetch weather data based on user input.
Component Structure: Developed reusable components for better maintainability (e.g., CityWeather, ForecastCard, SearchInput, TemperatureToggle).
State Management: Used React hooks to manage the application state.
Styling: Applied CSS for styling and responsiveness.

### Usage
Enter a city name in the search input and click the search button to fetch the current weather.
Click the toggle button to switch between Celsius and Fahrenheit.
View the five-day weather forecast displayed below the current weather information.

### Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.
