const express = require('express');
const bodyParser = require('body-parser');
const spotifyApi = require('spotify-web-api-node');
require('dotenv').config();

const app = express();
const port = 3000;

// Set up body-parser to handle form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Initialize the Spotify API with client credentials from the .env file
const spotifyApiInstance = new spotifyApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET
});

// Get access token from Spotify API
spotifyApiInstance.clientCredentialsGrant().then(
  function(data) {
    spotifyApiInstance.setAccessToken(data.body['access_token']);
    console.log('Token acquired successfully');
  },
  function(err) {
    console.log('Error retrieving access token', err);
  }
);

// Set up routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/search', (req, res) => {
  const query = req.body.song || req.body.artist;

  // Perform track search through Spotify API
  spotifyApiInstance.searchTracks(query).then(
    function(data) {
      const tracks = data.body.tracks.items;
      res.json(tracks.map(track => ({
        name: track.name,
        artists: track.artists.map(artist => artist.name).join(', '),
        album: track.album.name,
        link: track.external_urls.spotify,
        image: track.album.images[0].url,
        release_date: track.album.release_date,
        duration_ms: track.duration_ms
      })));
    },
    function(err) {
      console.log('Error occurred while fetching data', err);
      res.status(500).send('Error occurred while fetching data');
    }
  );
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
