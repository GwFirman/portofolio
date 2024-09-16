
 fetch('/api/spotify')
 .then(response => response.json())
 .then(data => {
   const trackList = document.getElementById('track-list');
   data.items.forEach(track => {
    
     const listItem = document.createElement('li');
     listItem.classList.add('border', 'hover:border-neutral-content', 'border-2', 'rounded-md','mb-4');

     const linkItem = document.createElement('a');
     linkItem.href = track.external_urls.spotify;
     linkItem.target = '_blank';
    
    
     const divContainer = document.createElement('div');
     divContainer.classList.add('p-2','lg:p-4', 'flex', 'items-center');

    
     const img = document.createElement('img');
     img.id = 'cover';
     img.src = track.album.images[0].url; 
     img.alt = `Cover image for ${track.name}`;
     img.classList.add('rounded-md', 'mr-4', 'lg:size-20','size-12');

     
     const textContainer = document.createElement('div');
     textContainer.classList.add('text-sm','lg:text-xl');

    
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

     
     linkItem.appendChild(divContainer);
     listItem.appendChild(linkItem);
     
     trackList.appendChild(listItem);
   });
 })
 .catch(error => console.error('Error:', error));