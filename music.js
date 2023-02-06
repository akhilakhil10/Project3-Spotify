
let songindex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let autoplay=0;

let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songname: "beshram rang-Pathan mo", filePath: "./songs/1.mp3", coverPath: "./songsimages/1.jpg"   ,dur:"04:18"},
    { songname: "Deva Deva - Brahmastra", filePath: "./songs/2.mp3", coverPath: "./songsimages/2.jpg"   ,dur:"04:39"},
    { songname: "Kesaria th- Brahmastra", filePath: "./songs/3.mp3", coverPath: "./songsimages/3.jpg"   ,dur:"04:28"},
    { songname: "Aafat song - Liger,hin", filePath: "./songs/4.mp3", coverPath: "./songsimages/4.jpg"   ,dur:"02:43"},
    { songname: "Dhoke Pyaar Ke hindi s", filePath: "./songs/5.mp3", coverPath: "./songsimages/5.jpg"   ,dur:"04:19"},
    { songname: "Halamithi Habi - Beast", filePath: "./songs/6.mp3", coverPath: "./songsimages/6.jpg"   ,dur:"04:39"},
    { songname: "Gehraiyaan - Doobey so", filePath: "./songs/7.mp3", coverPath: "./songsimages/7.jpg"   ,dur:"03:39"},
    { songname: "Thaar maar- God Father", filePath: "./songs/8.mp3", coverPath: "./songsimages/8.jpg"   ,dur:"04:27"},
    { songname: "Whistle wa -Heropatni2", filePath: "./songs/9.mp3", coverPath: "./songsimages/9.jpg"   ,dur:"02:49"},
    { songname: "Galliyan Ek Villan 2 s", filePath: "./songs/10.mp3", coverPath: "./songsimages/10.jpg" ,dur:"05:50"},
]

songitem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
    element.getElementsByClassName("timestamp")[0].innerHTML=songs[i].dur;

})

masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle')
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;


    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = ((myprogressbar.value * audioElement.duration) / 100);
})

const makeallplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            makeallplays();
            songindex = parseInt(e.target.id);
            audioElement.src = `./songs/${songindex + 1}.mp3`;
            mastersongname.innerText = songs[songindex].songname;
            audioElement.currentTime = 0;
            audioElement.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle')
            gif.style.opacity = 1;
        }
        else {
            audioElement.pause();
          
            gif.style.opacity = 0;
            masterplay.classList.remove('fa-pause-circle')
            masterplay.classList.add('fa-play-circle');
        }

    })
})


document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 9) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    audioElement.src = `./songs/${songindex + 1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle')
    gif.style.opacity = 1;
    console.log(songindex);

})


document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 9;

    }
    else {
        songindex -= 1;

    }
    audioElement.src = `./songs/${songindex + 1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    gif.style.opacity = 1;
    masterplay.classList.add('fa-pause-circle')
})

trackCurrentTime = document.querySelector(".currenttime"),
trackDuration = document.querySelector(".durationtime");



audioElement.addEventListener("timeupdate", songTimeUpdate);

function songTimeUpdate() {
    if (audioElement.duration) {
        let curmins = Math.floor(audioElement.currentTime / 60);
        let cursecs = Math.floor(audioElement.currentTime - curmins * 60);
        let durmins = Math.floor(audioElement.duration / 60);
        let dursecs = Math.floor(audioElement.duration - durmins * 60);

        if (dursecs < 10) {
            dursecs =  0 + dursecs;
        }
        if (durmins < 10) {
            durmins = "0" + durmins;
        }
        if (curmins < 10) {
            curmins = "0" + curmins;
        }
        if (cursecs < 10) {
            cursecs = "0" + cursecs;
        }
        trackCurrentTime.innerHTML = curmins + ":" + cursecs;
        trackDuration.innerHTML = durmins + ":" + dursecs;
    } else {
        trackCurrentTime.innerHTML = "00" + ":" + "00";
        trackDuration.innerHTML = "00" + ":" + "00";
    }
}

// audioElement.addEventListener("ended", function (){
    

    
//     audioElement.src = `./songs/${songindex+1}.mp3`;
//     audioElement.play();
    
        

// })

function myFunction() {
   
    var x = document.getElementById("navr");

    if (x.className === "navright") {
      x.className += " responsive";
    } else {
      x.className = "navright";
    }
    var g=document.getElementsByClassName("fa fa-bars");
    g.style.opacity=0;
  }




  audioElement.addEventListener("ended", function (){
    let i=0;
    while(i<=(songs.length)){
        audioElement.src = `./songs/${i-songindex}.mp3`;
        songindex==i;
        mastersongname.innerText = songs[songindex].songname;
        audioElement.play();
    console.log("i value"+i);
    console.log(songs.length);
    i++;
    
    }
  })

