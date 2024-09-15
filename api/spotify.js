const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const refresh_token = process.env.REFRESH_TOKEN;

  // Menggunakan refresh token untuk mendapatkan access token baru
  const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64')
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    })
  });

  const tokenData = await tokenResponse.json();
  const access_token = tokenData.access_token;

  // Gunakan access token untuk mendapatkan top tracks
  const topTracksResponse = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5&offset=0', {
    headers: {
      'Authorization': `Bearer ${access_token}`
    }
  });

  const topTracksData = await topTracksResponse.json();

  // Mengirim data top tracks ke frontend
  res.json(topTracksData);
};
