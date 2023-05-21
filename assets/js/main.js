up.history.config.restoreTargets=[':main'];

document.addEventListener('DOMContentLoaded', function () {
  console.log('Loaded');

  if(document.getElementsByClassName('tabgroup').length) {
    init_tabs(document.getElementsByClassName('tabgroup')[0]);
  }
  up.compiler('.tabgroup', init_tabs);

  init_web_music_player();

}, false);

function init_tabs(tabgroup) {
  console.log('init tabs');
    const tabs = tabgroup.getElementsByClassName('tab');
    const target = document.getElementById(tabgroup.dataset.target);

    for(const tab of tabs) {
      const link = tab.getElementsByTagName('a')[0];
      link.addEventListener('click', function(e) {
        e.preventDefault();
        for(const tab of tabs) {
          tab.classList.remove('active');
        }
        this.parentElement.classList.add('active');

        const targets = target.getElementsByClassName('tab-target');
        for(const inactive of targets) {
          inactive.classList.remove('active');
        }
        target.querySelector(this.getAttribute('href')).classList.add('active');
      });
    }
}

function init_web_music_player() {
  let audioContext,
      analyser,
      processor,
      dataArray,
      animationLoop;

  const refreshRate = 50;

  let tagline = document.getElementById('tagline');
  const taglineDefault = tagline.innerHTML;

  const player = document.createElement('audio');
  player.setAttribute('crossorigin', 'anonymous');

  const bars = [...(document.getElementsByClassName('nav-pages')[0].getElementsByTagName('li'))].reverse();
  const colors = ['vis-green', 'vis-green', 'vis-green', 'vis-yellow', 'vis-yellow', 'vis-yellow', 'vis-red', 'vis-red'];


  function playHandler() {
    console.log('playing');
    document.getElementById('playbutton').classList.add('hide');
    document.getElementById('pausebutton').classList.remove('hide');

    document.getElementsByClassName('navbar-nav')[0].classList.add('vis');

    animationLoop = setInterval(draw, refreshRate);
  }

  function pauseHandler() {
    console.log('paused');
    document.getElementById('playbutton').classList.remove('hide');
    document.getElementById('pausebutton').classList.add('hide');

    document.getElementsByClassName('navbar-nav')[0].classList.remove('vis');

    clearInterval(animationLoop);
  }

  player.addEventListener('playing', playHandler);
  player.addEventListener('pause', pauseHandler);
  player.addEventListener('ended', pauseHandler);

  const path = 'https://static.billhunt.dev/assets/audio/mp3/';
  // const path = 'http://localhost:8000/assets/mp3/';

  const selectlist = document.getElementById('audiofile');

  selectlist.addEventListener('change', function(e) {
    // console.log('change');
    document.getElementById('playbutton').classList.remove('hide');
    document.getElementById('pausebutton').classList.add('hide');
  });

  function isPlaying() {
    return !player.paused;
  }

  function nextTrack() {
    let next = selectlist.selectedIndex + 1
    if(next > selectlist.options.length) {
      next = 0;
    }

    selectlist.options[next].selected = true;
    playPause();
  }

  function initAnalyser() {
    console.log('initAnalyser');
    // Create an AudioContext and attach it.
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContext();
    const track = audioContext.createMediaElementSource(player);
    track.connect(audioContext.destination);

    // console.log('dest', audioContext.destination, track);

    // Attach an analyser.
    analyser = audioContext.createAnalyser();
    analyser.smoothingTimeConstant = 0.3;
    analyser.fftSize = 32;
    track.connect(analyser);

    const bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);

    // Check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
  }

  function visualize(val) {
    let fixed = val;
    if(val > 1) { fixed = 1; }
    if(val < 0) { fixed = 0; }

    if(val !== false) {
      bars.forEach((bar, i) => {
        // console.log( (i/bars.length), fixed );
        if(fixed >= (i / bars.length)) {
          bar.classList.add(colors[i]);
          bar.classList.remove('vis-black');
        }
        else {
          bar.classList.remove(colors[i]);
          bar.classList.add('vis-black');
        }
      });
    }
    else {
      bars.forEach((bar, i) => {
        bar.classList.remove(colors[i]);
        bar.classList.remove('vis-black');
      });
    }
  }

  function draw() {
    // const drawVisual = requestAnimationFrame(draw);

    analyser.getByteTimeDomainData(dataArray);
    // const avg = dataArray.reduce((acc, el) => acc + el, 0) / dataArray.length / 128- .53125 - .125; // Magic numbers.
    let avg = Math.max(...dataArray) /128;
    // Fix with magic numbers
    avg = (avg - 1) * 2 ;

    visualize(avg);
  }

  function playPause() {
    // We can't load the analyser until the user interacts with the page.
    if(!audioContext) {
      initAnalyser();
    }

    let value = selectlist.options[selectlist.selectedIndex].value;
    let file = path + value;

    // Start a new track
    if(player.src != file) {
      player.pause();
      player.src = file;
      player.load();

      for(const cls of document.body.classList) {
        if(cls.match(/^music-/)) {
          document.body.classList.remove(cls);
        }
      }

      switch(value) {
        case 'KMFDM-Megalomaniac.midi.mp3':
          document.body.classList.add('music-kmfdm');
          tagline.innerHTML = 'Better Than The Best';
          break;

        case 'Offspring-All_I_Want.midi.mp3':
          document.body.classList.add('music-taxi');
          tagline.innerHTML = 'Take me to the Pizza Hut';
          break;

        case 'Tool-Aenima.midi.mp3':
          tagline.innerHTML = 'learn to swim';
          break;

        default:
          tagline.innerHTML = taglineDefault;
      }
    }

    if(isPlaying()) {
      player.pause();
    }
    else {
      player.play();
    }
  }

  document.getElementById('playpause').addEventListener('click', e => {
    e.preventDefault();
    playPause();
  });

  // player.addEventListener("ended", nextTrack);
}


export default {};