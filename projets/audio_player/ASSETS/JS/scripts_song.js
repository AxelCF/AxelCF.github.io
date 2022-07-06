

fetch('../audio_player/ASSETS/PHP/PROCESS/recup_playlist.php').then(function (response) {
    return response.json();
}).then(function (text) {
    console.log(text);
    document.querySelector('.playlists').innerHTML == ''


    text.forEach(cover => {
        document.querySelector('.playlists').innerHTML += `
<div class="text" id="playlist-${cover.id}" data-id="${cover.id}">
<div class="case">
    <img src="./ASSETS/COVER/${cover.image}">
</div>
    <p>Un mix pas infini parce que il ne faut pas déconner</p>
</div>`;


    });
}).then(_ => {
    const idPlaylists = document.querySelectorAll('.text');
    idPlaylists.forEach((element) =>{
        const idPlaylist = element.dataset.id;
        
        element.addEventListener('click', () =>{
            getSongsFromPlaylist(idPlaylist);
    
        })
    })
    
    getSongsFromPlaylist();
})

function getSongsFromPlaylist(id) {
    let data = id
    fetch('../audio_player/ASSETS/PHP/PROCESS/recup_song.php',{body: data}).then(function (response) {
        return response.json();
    }).then(function (text) {
        console.log(text);

        let songLinks = [];

        text.forEach(song => {
            console.log(song.link);
            songLinks.push('/audio_player/ASSETS/MUSIC/' + song.link);

        });
        arrayLinks = songLinks;
    });
}
