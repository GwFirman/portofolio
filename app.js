
 fetch('/api/spotify')
 .then(response => response.json())
 .then(data => {
   const trackList = document.getElementById('track-list');
   data.items.forEach(track => {
     // Create list item element
     const listItem = document.createElement('li');
     listItem.classList.add('border', 'border-neutral-content', 'border-2', 'rounded-md','mb-4');

     // Create the main div that wraps the content
     const divContainer = document.createElement('div');
     divContainer.classList.add('p-4', 'flex', 'items-center');

     // Create the image element
     const img = document.createElement('img');
     img.id = 'cover';
     img.src = track.album.images[0].url; // Set image source from the API
     img.alt = `Cover image for ${track.name}`;
     img.classList.add('rounded-md', 'mr-4', 'size-20');

     
     const textContainer = document.createElement('div');
     textContainer.classList.add('text-md','lg:text-xl');

    
     const songTitle = document.createElement('p');
     songTitle.id = 'judul-lagu';
     songTitle.classList.add('font-bold');
     songTitle.textContent = track.name;

    
     const artistName = document.createElement('p');
     artistName.id = 'nama-artis';
     artistName.textContent = track.artists.map(artist => artist.name).join(', '); 

     
     textContainer.appendChild(songTitle);
     textContainer.appendChild(artistName);

     
     divContainer.appendChild(img);
     divContainer.appendChild(textContainer);

     
     listItem.appendChild(divContainer);

     
     trackList.appendChild(listItem);
   });
 })
 .catch(error => console.error('Error:', error));