fetch('/api/spotify')
  .then(response => response.json())
  .then(data => {
    const currentPlaying = data.currentPlaying;
    const dataTopTracks = data.topTracks;
    const trackList = document.getElementById('track-list');
    const currentPlayingList = document.getElementById('current-playing');

    if (currentPlaying.currently_playing_type === 'track') {

      const listItem = document.createElement('li');
      listItem.classList.add('border', 'hover:border-neutral-content', 'border-2', 'rounded-md', 'mb-4');

      const linkItem = document.createElement('a');
      linkItem.href = currentPlaying.item.external_urls.spotify;
      linkItem.target = '_blank';

      const divContainer = document.createElement('div');
      divContainer.classList.add('p-2', 'lg:p-4', 'flex', 'items-center');

      const img = document.createElement('img');
      img.id = 'cover';
      img.src = currentPlaying.item.album.images[0].url;
      img.alt = `Cover image for ${currentPlaying.item.name}`;
      img.classList.add('rounded-md', 'mr-4', 'lg:size-16', 'size-12');

      const textContainer = document.createElement('div');
      textContainer.classList.add('text-sm', 'lg:text-md');

      const songTitle = document.createElement('p');
      songTitle.id = 'judul-lagu';
      songTitle.classList.add('font-medium');
      songTitle.textContent = currentPlaying.item.name;

      const artistName = document.createElement('p');
      artistName.id = 'nama-artis';

      artistName.textContent = currentPlaying.item.artists.map(artist => artist.name).join(', ');

      textContainer.appendChild(songTitle);
      textContainer.appendChild(artistName);

      divContainer.appendChild(img);
      divContainer.appendChild(textContainer);

      linkItem.appendChild(divContainer);

      listItem.appendChild(linkItem);

      currentPlayingList.appendChild(listItem);
    } else {
      
      const listItem = document.createElement('li');
      listItem.classList.add('border', 'hover:border-neutral-content', 'border-2', 'rounded-md', 'mb-4');

      const divContainer = document.createElement('div');
      divContainer.classList.add('p-2', 'lg:p-4', 'flex', 'items-center');

      const placeholder = document.createElement('p');
      placeholder.textContent = "404";

      const img = document.createElement('div');
      img.classList.add('rounded-md', 'mr-4', 'lg:size-16', 'size-12', 'bg-base-100', 'flex', 'justify-center', 'items-center');

      const textContainer = document.createElement('div');
      textContainer.classList.add('text-sm', 'lg:text-md');

      const songTitle = document.createElement('p');
      songTitle.id = 'judul-lagu';
      songTitle.classList.add('font-medium');
      songTitle.textContent = "No song is currently playing.";

      const artistName = document.createElement('p');
      artistName.id = 'nama-artis';
      artistName.textContent = "Nobody";

      textContainer.appendChild(songTitle);
      textContainer.appendChild(artistName);

      img.appendChild(placeholder);
      divContainer.appendChild(img);

      divContainer.appendChild(textContainer);

      listItem.appendChild(divContainer);

      currentPlayingList.appendChild(listItem);

    }

    dataTopTracks.items.forEach(track => {

      const listItem = document.createElement('li');
      listItem.classList.add('border', 'hover:border-neutral-content', 'border-2', 'rounded-md', 'mb-4');

      const linkItem = document.createElement('a');
      linkItem.href = track.external_urls.spotify;
      linkItem.target = '_blank';

      const divContainer = document.createElement('div');
      divContainer.classList.add('p-2', 'lg:p-4', 'flex', 'items-center');

      const img = document.createElement('img');
      img.id = 'cover';
      img.src = track.album.images[0].url;
      img.alt = `Cover image for ${track.name}`;
      img.classList.add('rounded-md', 'mr-4', 'lg:size-16', 'size-12');

      const textContainer = document.createElement('div');
      textContainer.classList.add('text-sm', 'lg:text-md');

      const songTitle = document.createElement('p');
      songTitle.id = 'judul-lagu';
      songTitle.classList.add('font-medium');
      songTitle.textContent = track.name;

      const artistName = document.createElement('p');
      artistName.id = 'nama-artis';
      artistName.textContent = track.artists.map(artist => artist.name).join(', ');

      textContainer.appendChild(songTitle);
      textContainer.appendChild(artistName);

      divContainer.appendChild(img);
      divContainer.appendChild(textContainer);

      linkItem.appendChild(divContainer);
      listItem.appendChild(linkItem);

      trackList.appendChild(listItem);
    });
  })
  .catch(error => console.error('Error:', error));