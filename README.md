# Spotify Song Finder

## Objective
The goal of this project is to build a Spotify Song Finder web application using Node.js, Express.js, and the Spotify API. This application integrates third-party APIs, processes data dynamically, and displays the results in a user-friendly format.

---

## Features
1. **Search Songs and Artists**
   - Users can search for songs or artists using an input form on the homepage.
2. **Track Information**
   - Displays the following details for each track:
     - Song Name
     - Artist(s)
     - Album Name
     - Link to listen to the song on Spotify
3. **Enhanced Features**
   - Album pictures
   - Release date of the album/track
   - Sorting and filtering options (e.g., by popularity, release date)
   - Additional details such as track duration and preview link.
4. **Responsive Design**
   - Clean and user-friendly interface styled with CSS.

---

## Project Structure
```
/project-directory
  |- server.js
  |- .env
  |- public/
      |- style.css
  |- views/
      |- index.html
```

---

## Installation and Setup

### Prerequisites
- Node.js installed on your system
- A Spotify Developer Account (to obtain Client ID and Client Secret)

### Steps to Run the Application

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd project-directory
   ```

2. **Install Dependencies**
   Run the following command to install all required dependencies:
   ```bash
   npm install
   ```

3. **Spotify API Setup**
   - Visit the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).
   - Create a new app and obtain the Client ID and Client Secret.
   - Create a `.env` file in the project root and add the following:
     ```env
     SPOTIFY_CLIENT_ID=your_client_id
     SPOTIFY_CLIENT_SECRET=your_client_secret
     ```

4. **Run the Application**
   Start the server using:
   ```bash
   node server.js
   ```
   The application will run on `http://localhost:3000/` by default.

---

## Functionality

1. Navigate to the homepage (`http://localhost:3000/`).
2. Enter a song or artist name in the input form and submit.
3. View the results dynamically displayed on the same page, including:
   - Song Name
   - Artist(s)
   - Album Name
   - Album Cover
   - Release Date
   - Link to Spotify
4. Use additional features like sorting or filtering if implemented.

---

## Dependencies
- **Express.js**: Handles server requests and routing.
- **Body-Parser**: Parses incoming request bodies.
- **Spotify-Web-API-Node**: Integrates with Spotify API.
- **Dotenv**: Loads environment variables from a `.env` file.

Install these dependencies using:
```bash
npm install express body-parser spotify-web-api-node dotenv
```

---

## Submission Guidelines
1. Zip the entire project folder and submit it.
2. Exclude sensitive credentials (e.g., `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET`) from the `.env` file before submission.
3. Ensure the following files are included and functional:
   - `views/index.html`
   - `public/style.css`
   - `server.js`
   - `.env` (optional, without credentials)

---

## License
This project is for educational purposes only and is not intended for production use.

---

## Author
- Sapargali Bekzat SE-2323

Happy Coding!

